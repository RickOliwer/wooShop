import fs from 'fs'
import { GET_HEADER } from '../src/queries/Layout/get-header.mjs';
import wp from '../src/wordpress/wp.mjs'



const PreBuild = async () => {
    const { data } = await wp(GET_HEADER)

    fs.writeFileSync("./data/header-static.json", JSON.stringify({
        headerMenus: data.headerMenus
    }))
}

PreBuild();