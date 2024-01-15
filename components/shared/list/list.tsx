import { ListProps } from "@/interfaces";


const List = ({ title, items, containerCustom="", titleCustom="", textCustom="" } : ListProps) => {
  return (
    <div className={containerCustom}>
      <h1 className={`${titleCustom}`}>{ title }</h1>
      {items.map((item) => {
        return (
          <p key={item} className={`${textCustom}`}>{ item }</p>
        )
      })}
    </div>
  )
}

export default List;