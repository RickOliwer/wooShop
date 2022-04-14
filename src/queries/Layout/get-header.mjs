
export const GET_HEADER =
`query GET_HEADER {
    headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
      nodes {
        path
        label
        id
      }
    }
 }`