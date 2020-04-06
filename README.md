# github-stats

A tiny project to work with Node, explore tooling, API development and bonus typescript.

### Steps

#### For development

1. Clone the repository
2. Run `npm install`
3. Run `npm install -g typescript`
4. Run `tsc`
5. Prepare a Github personal token from the [Github Settings page](https://github.com/settings/profile) and set an environment variable `GH_TOKEN` with the value.
6. Start in development mode using `npm run dev`

#### For production 🤭

Follow the same steps except for Step No. 6.

Start using `npm run prod`

### Usage with Docker (⚠️ Work In Progress)

Docker image can be pulled from the Github registry. To use, pull the image and run -

`docker run -p 8000:8000 -e GH_TOKEN=<INSERT TOKEN HERE> server`
