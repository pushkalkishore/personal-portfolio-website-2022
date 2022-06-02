import "./ContainerStyles.css"
export default function Container({children,heading,footer}){
  return <div className="sectionContainer">
    {heading}
    <hr className="sectionHr"/>
    {children}
    <hr className="sectionHr"/>
    {footer}
  </div>
}