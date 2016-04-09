import Atom           from "kefir.atom"
import K, {fromKefir} from "kefir.react.html"
import React          from "react"

export default ({value = Atom("")}) => {
  const editing = Atom(false)
  const exit = () => editing.set(false)
  const save = e => {value.set(e.target.value); exit()}
  return fromKefir(K(editing, e => e
    ? <K.input key="1"
               type="text"
               autoFocus
               onFocus={({target: t}) => t.selectionStart = t.value.length}
               defaultValue={value}
               onKeyDown={e => e.key === "Enter"  && save(e)
                            || e.key === "Escape" && exit()}
               onBlur={save}/>
    : <K.input key="0"
               type="text"
               disabled
               {...{value}}
               onDoubleClick={() => editing.set(true)}/>))
}
