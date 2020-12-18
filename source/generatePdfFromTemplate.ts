import fs from 'fs';
import { mdToPdf } from 'md-to-pdf';
import { getPropertyFromDottedString } from './helpers/object';

const fillTemplate = (template: string, jsonData: Record<string, any> ) => {
    const regex = /{{(.*?)}}/g;
    const templateStrings = [...template.matchAll(regex)];

    return templateStrings.reduce((prev, currentRegexResult) => {
        const replacementValue =  getPropertyFromDottedString(jsonData, currentRegexResult[1].trim());
        return prev.replace(currentRegexResult[0], replacementValue);
    }, template);
}

const makePdf = async (markdownDoc: string, filename?: string) => {
    const pdf = await mdToPdf({ content: markdownDoc }).catch(console.error);
    if (pdf) {
        if (filename){
            fs.writeFileSync(`${filename}.pdf`, pdf.content);
            console.log(`Wrote the pdf to ${filename}.pdf`);
        }
        return pdf.content;
    }
    return undefined;
}

const generatePdfFromTemplate = (template: string, jsonData: Record<string, any>, filename?: string) => {
    const filledTemplate = fillTemplate(template, jsonData);
    return makePdf(filledTemplate, filename);
}

const testTemplate = fs.readFileSync('testTemplate.md').toString();
const testData = {
    value: 'Programming test and shit',
    another: {
        value: 'another test',
    },
};

generatePdfFromTemplate(testTemplate, testData, 'test');
