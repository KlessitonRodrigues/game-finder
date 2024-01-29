import { getLangQuery } from 'src/utils/url';

import ENJSON from 'UI/assets/lang/en.json';
import ESJSON from 'UI/assets/lang/es.json';
import PTJSON from 'UI/assets/lang/pt.json';

const lang = getLangQuery();
const ENLang = ENJSON as Utils.LangJson;
const PTLang = PTJSON as Utils.LangJson;
const ESLang = ESJSON as Utils.LangJson;

const Text = (props: Props.Text) => {
  const { path } = props;

  if (lang === 'es') return <>{ESLang[path] || 'NO TEXT'}</>;
  if (lang === 'pt') return <>{PTLang[path] || 'NO TEXT'}</>;
  return <>{ENLang[path] || 'NO TEXT'}</>;
};

export default Text;
