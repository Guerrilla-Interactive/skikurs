import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/layout/container";
import HappeningBody from "../../components/elements/happening/happening-body";
import MoreHappenings from "../../components/sections/more-happenings";
import Header from "../../components/sections/header";
import HappeningHeader from "../../components/elements/happening/happening-header";
import Avatar from "../../components/elements/avatar";
import SectionSeparator from "../../components/old/section-separator";
import Layout from "../../components/layout/layout";
import { getAllHappeningsWithSlug, getHappeningAndMoreHappenings } from "@lib/api/happenings";
import HappeningTitle from "../../components/elements/happening/happening-title";
import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";

export default function Happening({ happening, moreHappenings, preview }) {
  const router = useRouter();
  if (!router.isFallback && !happening?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>

        {router.isFallback ? (
          <HappeningTitle>Loading…</HappeningTitle>
        ) : (
          <>



            <article>
              <Head>
                <title>
                  {happening.title} | {SITE_NAME}
                </title>
                {/* <meta property="og:image" content={happening.ogImage.url} /> */}
              </Head>

              {/* Background element top */}
              <div className="absolute top-0 left-0 z-[-10] ">
                <svg width="100vw" preserveAspectRatio="none" height="45rem" viewBox="0 0 1440 706" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1440 -2C1240.19 360.342 395.538 620.619 0 706V-1.46526C577.244 -1.46524 1440 -2 1440 -2Z" fill="black" />
                </svg>

              </div>

              {/* Row 1 - Header*/}
              <div className="mt-32 mb-20">
                <HappeningHeader
                  title={happening.title}
                  subtitle={happening.subtitle}
                  coverImage={happening.coverImage}
                />
              </div>

              {/* Row 2 - Main Info*/}
              <div className="grid gap-12 md:grid-cols-2 ">


                {/* Col 1 - Info boxes  */}
                <div className="grid content-start gap-4 ">

                  {/* Info Box */}
                  <div className="grid justify-start max-w-lg grid-flow-col px-8 py-6 text-white bg-black border border-white rounded-lg border-opacity-30">

                    {/* Icon Column */}
                    <div className="pr-8 justify-content-center ">

                      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.7998 18.2C1.7998 22.4965 3.50659 26.617 6.54468 29.6551C9.58276 32.6932 13.7033 34.4 17.9998 34.4C22.2963 34.4 26.4168 32.6932 29.4549 29.6551C32.493 26.617 34.1998 22.4965 34.1998 18.2C34.1998 13.9035 32.493 9.78296 29.4549 6.74487C26.4168 3.70678 22.2963 2 17.9998 2C13.7033 2 9.58276 3.70678 6.54468 6.74487C3.50659 9.78296 1.7998 13.9035 1.7998 18.2V18.2Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.9998 27.2V20" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.3998 10.9999C14.3998 11.9547 14.7791 12.8704 15.4542 13.5455C16.1293 14.2206 17.045 14.5999 17.9998 14.5999C18.9546 14.5999 19.8702 14.2206 20.5454 13.5455C21.2205 12.8704 21.5998 11.9547 21.5998 10.9999C21.5998 10.0451 21.2205 9.12945 20.5454 8.45432C19.8702 7.77919 18.9546 7.3999 17.9998 7.3999C17.045 7.3999 16.1293 7.77919 15.4542 8.45432C14.7791 9.12945 14.3998 10.0451 14.3998 10.9999Z" fill="white" />
                      </svg>

                    </div>

                    {/* Text Column */}
                    <div>
                      <div className="text-[#aaa]">Hva skjer?</div>
                      <div>Fire dagers lab, med utgangspunkt i abcdefghikjl og mnopqrstuv. Laben avsluttes med en visning torsdag 27. juni kl 18:00</div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="grid justify-start max-w-lg grid-flow-col px-8 py-6 text-white bg-black border border-white rounded-lg border-opacity-30">

                    {/* Icon Column */}
                    <div className="pr-8 justify-content-center ">

                      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.7998 18.2C1.7998 22.4965 3.50659 26.617 6.54468 29.6551C9.58276 32.6932 13.7033 34.4 17.9998 34.4C22.2963 34.4 26.4168 32.6932 29.4549 29.6551C32.493 26.617 34.1998 22.4965 34.1998 18.2C34.1998 13.9035 32.493 9.78296 29.4549 6.74487C26.4168 3.70678 22.2963 2 17.9998 2C13.7033 2 9.58276 3.70678 6.54468 6.74487C3.50659 9.78296 1.7998 13.9035 1.7998 18.2V18.2Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.9998 27.2V20" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.3998 10.9999C14.3998 11.9547 14.7791 12.8704 15.4542 13.5455C16.1293 14.2206 17.045 14.5999 17.9998 14.5999C18.9546 14.5999 19.8702 14.2206 20.5454 13.5455C21.2205 12.8704 21.5998 11.9547 21.5998 10.9999C21.5998 10.0451 21.2205 9.12945 20.5454 8.45432C19.8702 7.77919 18.9546 7.3999 17.9998 7.3999C17.045 7.3999 16.1293 7.77919 15.4542 8.45432C14.7791 9.12945 14.3998 10.0451 14.3998 10.9999Z" fill="white" />
                      </svg>

                    </div>

                    {/* Text Column */}
                    <div>
                      <div className="text-[#aaa]">Hva skjer?</div>
                      <div>Fire dagers lab, med utgangspunkt i abcdefghikjl og mnopqrstuv. Laben avsluttes med en visning torsdag 27. juni kl 18:00</div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="grid justify-start max-w-lg grid-flow-col px-8 py-6 text-white bg-black border border-white rounded-lg border-opacity-30">

                    {/* Icon Column */}
                    <div className="pr-8 justify-content-center ">

                      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.7998 18.2C1.7998 22.4965 3.50659 26.617 6.54468 29.6551C9.58276 32.6932 13.7033 34.4 17.9998 34.4C22.2963 34.4 26.4168 32.6932 29.4549 29.6551C32.493 26.617 34.1998 22.4965 34.1998 18.2C34.1998 13.9035 32.493 9.78296 29.4549 6.74487C26.4168 3.70678 22.2963 2 17.9998 2C13.7033 2 9.58276 3.70678 6.54468 6.74487C3.50659 9.78296 1.7998 13.9035 1.7998 18.2V18.2Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.9998 27.2V20" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.3998 10.9999C14.3998 11.9547 14.7791 12.8704 15.4542 13.5455C16.1293 14.2206 17.045 14.5999 17.9998 14.5999C18.9546 14.5999 19.8702 14.2206 20.5454 13.5455C21.2205 12.8704 21.5998 11.9547 21.5998 10.9999C21.5998 10.0451 21.2205 9.12945 20.5454 8.45432C19.8702 7.77919 18.9546 7.3999 17.9998 7.3999C17.045 7.3999 16.1293 7.77919 15.4542 8.45432C14.7791 9.12945 14.3998 10.0451 14.3998 10.9999Z" fill="white" />
                      </svg>

                    </div>

                    {/* Text Column */}
                    <div>
                      <div className="text-[#aaa]">Hva skjer?</div>
                      <div>Fire dagers lab, med utgangspunkt i abcdefghikjl og mnopqrstuv. Laben avsluttes med en visning torsdag 27. juni kl 18:00</div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="grid justify-start max-w-lg grid-flow-col px-8 py-6 text-white bg-black border border-white rounded-lg border-opacity-30">

                    {/* Icon Column */}
                    <div className="pr-8 justify-content-center ">

                      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.7998 18.2C1.7998 22.4965 3.50659 26.617 6.54468 29.6551C9.58276 32.6932 13.7033 34.4 17.9998 34.4C22.2963 34.4 26.4168 32.6932 29.4549 29.6551C32.493 26.617 34.1998 22.4965 34.1998 18.2C34.1998 13.9035 32.493 9.78296 29.4549 6.74487C26.4168 3.70678 22.2963 2 17.9998 2C13.7033 2 9.58276 3.70678 6.54468 6.74487C3.50659 9.78296 1.7998 13.9035 1.7998 18.2V18.2Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.9998 27.2V20" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.3998 10.9999C14.3998 11.9547 14.7791 12.8704 15.4542 13.5455C16.1293 14.2206 17.045 14.5999 17.9998 14.5999C18.9546 14.5999 19.8702 14.2206 20.5454 13.5455C21.2205 12.8704 21.5998 11.9547 21.5998 10.9999C21.5998 10.0451 21.2205 9.12945 20.5454 8.45432C19.8702 7.77919 18.9546 7.3999 17.9998 7.3999C17.045 7.3999 16.1293 7.77919 15.4542 8.45432C14.7791 9.12945 14.3998 10.0451 14.3998 10.9999Z" fill="white" />
                      </svg>

                    </div>

                    {/* Text Column */}
                    <div>
                      <div className="text-[#aaa]">Hva skjer?</div>
                      <div>Fire dagers lab, med utgangspunkt i abcdefghikjl og mnopqrstuv. Laben avsluttes med en visning torsdag 27. juni kl 18:00</div>
                    </div>
                  </div>

                  {/* End of boxes */}
                </div>


                {/* Col 2 */}
                <div className="mt-[10rem]"><HappeningBody content={happening.body} /></div>


              </div>



              {/* Row 3 - Additional Info */}

              <div className="grid gap-12 mt-[10rem] md:grid-cols-2 ">
                {/* Col 1 */}
                <div className="max-w-xl">
                  <h3 className="mb-6 text-xl font-semibold">Title</h3>
                  <div>Spin Off samarbeider med PRODA om diverse danseklasser for profesjonelle. Klassene foregår i PRODAs lokaler på Rom for Dans i uke 21-22, og består av tidligere Spin Off-elever. Mer info og timeplan er tilgjengelig via proda.no/timeplan
                  </div>
                </div>

                {/* Col 2 */}
                <div className="max-w-xl">
                  <h3 className="mb-6 text-xl">Title</h3>
                  <div>Spin Off samarbeider med PRODA om diverse danseklasser for profesjonelle. Klassene foregår i PRODAs lokaler på Rom for Dans i uke 21-22, og består av tidligere Spin Off-elever. Mer info og timeplan er tilgjengelig via proda.no/timeplan
                  </div>
                </div>

              </div>




            </article>

            <SectionSeparator />
            {moreHappenings.length > 0 && <MoreHappenings happenings={moreHappenings} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getHappeningAndMoreHappenings(params.slug, preview);
  return {
    props: {
      preview,
      happening: data?.happening || null,
      moreHappenings: data?.moreHappenings || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allHappenings = await getAllHappeningsWithSlug();
  return {
    paths:
      allHappenings?.map((happening) => ({
        params: {
          slug: happening.slug,
        },
      })) || [],
    fallback: true,
  };
}
