import stringify from 'json-stringify-pretty-compact';
import * as fs from 'fs';
import {VIADefinitionV3} from '@the-via/reader';
import {getOutputPath} from './get-path';

export async function buildNames(definitions: VIADefinitionV3[]) {
  const outputPath = `${getOutputPath()}`;

  const names = definitions.reduce((p, n) => [...p, n.name], []).sort();

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  fs.writeFileSync(`${outputPath}/keyboard_names.json`, stringify(names));
  console.log(`Generated ${outputPath}/keyboard_names.json`);
}
