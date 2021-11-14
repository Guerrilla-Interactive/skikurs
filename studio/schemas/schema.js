// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import custompage from "./custom-page";

// 1. Header
import menu from "./modules/header/menu";
import header from "./header";
import menuItem from "./modules/header/menuItem";

// 2. Happening
import happening from "./happening";
import what from "./modules/infoboxes/what";
import who from "./modules/infoboxes/who";
import when from "./modules/infoboxes/when";
import where from "./modules/infoboxes/where";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import story from "./story";
import author from "./author";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    happening,
    story,
    author,
    category,

    // 1. Header
    menu,
    header,
    menuItem,

    // 2. Happening
    what,
    who,
    when,
    where,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    custompage,
  ]),
});
