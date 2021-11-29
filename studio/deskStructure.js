// deskStructure.js
import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import {
  BsWindow,
  BsChatSquareQuote,
  BsGear,
  BsCalendar2Event,
  BsSegmentedNav,
  BsFileEarmarkPlus,
  BsLayoutWtf,
  BsBorderTop,
  BsBorderBottom,
  BsPlusSquareDotted,
  BsCardList,
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
      S.documentTypeListItem("course").icon(() => (
        <span>
          <BsCardList />
        </span>
      )),

      S.divider(),

      S.documentTypeListItem("custompage").icon(() => (
        <span>
          <BsFileEarmarkPlus />
        </span>
      )),
      S.documentTypeListItem("global-section").icon(() => (
        <span>
          <BsPlusSquareDotted />
        </span>
      )),

      S.listItem()
        .title("Global Settings")
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
                .title("Layout")
                .icon(() => (
                  <span>
                    <BsLayoutWtf />
                  </span>
                ))
                .child(
                  S.list()
                    .title("Layout parts")
                    .items([
                      S.listItem()
                        .title("Header")
                        .icon(() => (
                          <span>
                            <BsBorderTop />
                          </span>
                        ))
                        .child(
                          S.document().schemaType("header").documentId("header")
                        ),

                      S.listItem()
                        .title("Footer")
                        .icon(() => (
                          <span>
                            <BsBorderBottom />
                          </span>
                        ))
                        .child(
                          S.document().schemaType("footer").documentId("footer")
                        ),
                    ])
                ),

              S.documentTypeListItem("navigation").icon(() => (
                <span>
                  <BsSegmentedNav />
                </span>
              )),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "footer",
            "course",
            "navigation",
            "header-section",
            "global-section",
            "story",
            "happening",
            "author",
            "category",
            "header",
            "custompage",
          ].includes(listItem.getId())
      ),
    ]);
