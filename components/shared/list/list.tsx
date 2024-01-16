import { ListProps } from "@/interfaces";


const List = ({ title, items, containerCustom="", titleCustom="", textCustom="" } : ListProps) => {
  return (
    <ul className={containerCustom}>
      <h1 className={`${titleCustom}`}>{ title }</h1>
      <li>
        {items.map((item) => {
          return (
            <p key={item} className={`${textCustom}`}>{ item }</p>
          )
        })}
      </li>
    </ul>
  )
}

export default List;