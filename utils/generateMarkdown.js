// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
### ${data.description}

## Table of Contents
1. [Installation] (#installation)
2. [Usage] (#usuage)
3. [License] (#license)
4. [Contributing] (#contributing)
5. [Test] (#tests)
6. [Questions] (#questions)
7. [Link to Application] (#Link)
8. [Screenshot of Application] (#screenshot)

## Usage <a name="usuage"></a>
### ${data.usage}

## License <a name="license"></a>
### ${data.license}

## Contributing <a name="contributing"></a>
### ${data.contribution}

##Tests <a name="tests"></a>
### ${data.tests}

## Questions <a name="questions"></a>
### [Click here to email me.1(mailto:${data.email})]

## Link to Deployed Application:
### [${data.URLName}][${data.URl}] <a name="link"></a>
## ![${data.altText}][${data.photFile}] <a name="screenshot"></a>
`;
}

module.exports = generateMarkdown;

