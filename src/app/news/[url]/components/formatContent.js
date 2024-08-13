import { Divide } from "lucide-react"

/**
 * Formats strings into appropriate HTML elements.
 * @param {String} content The text content.
 * @returns {Object} HTML elements corresponding to the structure of the text.
 */
export function formatContent(content) {

  //### Indicates new section in the string
  const sections = content.split('### ')

  console.log(sections)

  return sections.map((section, index) => {
    if(index === 0) {
      return <p key={index}>{section.trim}</p> 
    } else {
      const [title, ...sectionContent] = section.split('\n')

      return (
        <div key={index}>
          <h3 className="text-[1.2rem] p-2 font-bold">{title}</h3>
          <p className="">{sectionContent.join(' ').trim()}</p>
        </div>
      )
    }
  })
}