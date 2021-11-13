// deskStructure.js
import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import {
  BsWindow,
  BsChatSquareQuote,
  BsGear,
  BsCalendar2Event,
  BsFileEarmarkPlus,
} from "react-icons/bs";

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.documentTypeListItem("happening").icon(() => (
        <span>
          <BsCalendar2Event />
        </span>
      )),
      S.documentTypeListItem("story").icon(() => (
        <span>
          <BsChatSquareQuote />
        </span>
      )),

      S.documentTypeListItem("custompage").icon(() => (
        <span>
          <BsFileEarmarkPlus />
        </span>
      )),

      S.divider(),
      S.listItem()
        .title("Global settings")
        .icon(() => (
          <span>
            <BsGear />
          </span>
        ))
        .child(
          S.list()
            .title("What do you want to edit?")
            .items([
              S.listItem()
                .title("Header")
                .icon(() => (
                  <span>
                    <BsWindow />
                  </span>
                ))
                .child(S.document().schemaType("header").documentId("header")),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "footer",
            "story",
            "happening",
            "author",
            "category",
            "header",
            "custompage",
          ].includes(listItem.getId())
      ),
    ]);
