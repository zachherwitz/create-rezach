import path from 'path';
import fs from 'fs-extra';
import prompts from 'prompts';

async function main() {
  const args = process.argv.slice(2);
  let projectName = args[0];

  if (!projectName) {
    const response = await prompts({
      type: 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-project',
    });
    projectName = response.projectName;
    if (!projectName) {
      console.log('Cancelled.');
      process.exit(1);
    }
  }

  // Discover templates
  const templatesDir = path.join(__dirname, '..', 'templates');
  const templates = fs.readdirSync(templatesDir).filter((name) =>
    fs.statSync(path.join(templatesDir, name)).isDirectory()
  );

  if (templates.length === 0) {
    console.error('No templates found.');
    process.exit(1);
  }

  let template: string;

  if (templates.length === 1) {
    template = templates[0];
  } else {
    const response = await prompts({
      type: 'select',
      name: 'template',
      message: 'Select a template:',
      choices: templates.map((t) => ({ title: t, value: t })),
    });
    template = response.template;
    if (!template) {
      console.log('Cancelled.');
      process.exit(1);
    }
  }

  const targetDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.error(`Directory "${projectName}" already exists.`);
    process.exit(1);
  }

  // Copy template
  const templateDir = path.join(templatesDir, template);
  fs.copySync(templateDir, targetDir);

  // Replace {{project-name}} in package.json
  const pkgPath = path.join(targetDir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    let pkgContent = fs.readFileSync(pkgPath, 'utf-8');
    pkgContent = pkgContent.replace(/\{\{project-name\}\}/g, projectName);
    fs.writeFileSync(pkgPath, pkgContent);
  }

  console.log(`\n✔ Created "${projectName}" with template "${template}"\n`);
  console.log('Next steps:\n');
  console.log(`  cd ${projectName}`);
  console.log('  npm install');
  console.log('  npm run dev\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
