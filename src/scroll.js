import * as React from "karet"
import * as U     from "karet.util"

import {NumberInput} from "./restricted-input"

const cat = [
`                         ..,co88oc.oo8888cc,..`,
`  o8o.               ..,o8889689ooo888o"88888888oooc..`,
`.88888             .o888896888".88888888o'?888888888889ooo....`,
`a888P          ..c6888969""..,"o888888888o.?8888888888"".ooo8888oo.`,
`088P        ..atc88889"".,oo8o.86888888888o 88988889",o888888888888.`,
`888t  ...coo688889"'.ooo88o88b.'86988988889 8688888'o8888896989^888o`,
` 888888888888"..ooo888968888888  "9o688888' "888988 8888868888'o88888`,
`  ""G8889""'ooo888888888888889 .d8o9889""'   "8688o."88888988"o888888o .`,
`           o8888'""""""""""'   o8688"          88868. 888888.68988888"o8o.`,
`           88888o.              "8888ooo.        '8888. 88888.8898888o"888o.`,
`           "888888'               "888888'          '""8o"8888.8869888oo8888o .`,
`      . :.:::::::::::.: .     . :.::::::::.: .   . : ::.:."8888 "888888888888o`,
`                                                        :..8888,. "88888888888.`,
`                                                        .:o888.o8o.  "866o9888o`,
`                                                         :888.o8888.  "88."89".`,
`                                                        . 89  888888    "88":.`,
`                    atc                                 :.     '8888o`,
`                                                         .       "8888..`,
`                                                                   888888o.`,
`                                                                    "888889,`,
`                                                             . : :.:::::::.: :.`].join("\n")

const Scroller = ({scrollTop, scrollLeft}) =>
  <div ref={U.setProps({scrollTop, scrollLeft})}
       onScroll={U.getProps({scrollTop, scrollLeft})}
       style={{display: "inline-block",
               overflowY: "scroll",
               overflowX: "scroll",
               height: "10em",
               width: "10em"}}>
    <pre>{cat}</pre>
  </div>

const ScrollInput = ({label, ...props}) =>
  <div>
    <label>{label} <NumberInput {...props}/></label>
  </div>

export default ({scrollTop = U.atom(0), scrollLeft = U.atom(0)}) =>
  <div>
    <Scroller {...{scrollTop, scrollLeft}}/>
    <Scroller {...{scrollTop, scrollLeft}}/>
    <ScrollInput type="text"   label="y" value={scrollTop}/>
    <ScrollInput type="number" label="x" value={scrollLeft}/>
  </div>
