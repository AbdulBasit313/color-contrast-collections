import { graphql, useStaticQuery } from "gatsby"

const useColorContrast = () => {
  const myData = useStaticQuery(graphql`
    query allContrast {
      allDataJson {
        edges {
          node {
            background
            foreground
            id
          }
        }
      }
    }
  `)

  const newData = myData.allDataJson.edges.map(
    ({ node: { background, foreground, id } }) => {
      return {
        id,
        background,
        foreground,
      }
    }
  )

  return newData
}

export default useColorContrast
