# buildbitcoin.com
🪙 Build Bitcoin website

# Usage
1. Install dependencies: `npm install`
1. Run the development server: `npm run dev`
  * Doesn't bundle assets and uses Hot Module Replacement (HMR) to automatically update the browser view when changes are made to files.
1. Build the site: `npm run build`
  * Generates the static site for production.
1. Preview the site: `npm run preview`
  * Once the static site is built, runs a local HTTP server to view it. Useful to make sure reality matches the development server.

# Project Structure
```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro will look for `.astro` or `.md` files in the `src/pages` directory. Each page is exposed as a route based on its file name. Any static assets, like images, can be placed in the `public/` directory.

# Dependencies
Built using:
* [Astro](https://astro.build)
* [TailwindCSS](https://tailwindcss.com)

# Deployment
## Dependencies
* [Terraform](https://terraform.io/)
* [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

## Creating AWS Components
1. Navigate to the `terraform` folder, which contains all of the deployment code needed.
1. Run `terraform plan -var-file="env/production.tfvars"` to see the planned deployment.
1. If there are no errors and everything looks good, run `terraform apply -var-file="env/production.tfvars"` to deploy.
1. To undeploy, run `terraform destroy -var-file="env/production.tfvars"`.