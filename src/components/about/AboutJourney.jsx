import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingThree from '../reuseable/HeadingThree'
import HeadingOne from '../reuseable/HeadingOne'
import Image from 'next/image'
import Para from '../reuseable/Para'

function AboutJourney() {
    return (
        <MaxWidthWrapper className='max-w-screen-lg sm:py-10 py-6'>
            <span className='text-center sm:px-0 px-2'>
                {/* <HeadingThree>Unsere Philosophie</HeadingThree> */}
                <HeadingOne className='mt-2'> Unsere
                    {` `} <span className='text-amber'>
                        Philosophie
                    </span>
                </HeadingOne>
            </span>
            <main className='flex flex-col sm:gap-y-10 gap-y-8 md:mt-14 mt-2'>
                <div className='flex lg:flex-row flex-col justify-between md:gap-y-8 gap-y-6 gap-x-4 items-center'>
                    <span className='flex flex-col sm:gap-y-3 gap-y-2 max-w-[450px]'>
                        {/* <HeadingOne className='lg:text-start text-center text-amber md:text-4xl sm:text-4xl text-3xl'>
                            2010
                        </HeadingOne>
                        <HeadingOne className='lg:text-start text-center md:text-4xl sm:text-4xl text-3xl'>
                            Der Funke der Inspiration
                        </HeadingOne> */}
                        <ul className="lg:text-start text-center text-black list-disc pl-5">
                            <li>
                                <strong>Ehrlichkeit und Transparenz:</strong> Wir garantieren Ihnen, dass alle unsere Touren genau das bieten, was sie versprechen – echte Abenteuer, historische Stätten, Naturerlebnisse und kulturelle Begegnungen ohne unerwünschte kommerzielle Ablenkungen.
                            </li>
                            <li>
                                <strong>Fokus auf echte Erlebnisse:</strong> Statt kommerziellen Stopps bieten wir Ihnen die Möglichkeit, wirklich in die ägyptische Kultur einzutauchen – sei es durch eine exklusive Bootstour am Roten Meer, eine Wüstensafari, ein echtes Beduinen-Erlebnis oder einen Besuch der beeindruckenden archäologischen Stätten.
                            </li>
                            <li>
                                <strong>Keine versteckten Kosten:</strong> Unsere Ausflüge beinhalten alles, was Sie benötigen – von Transport über Eintrittsgelder bis zu den besten Guides. Es gibt keine versteckten Gebühren für unerwünschte Extras oder „Fakultativ-Angebote“.
                            </li>
                        </ul>
                    </span>
                    <Image
                        src='/images/aj1.webp'
                        width={400}
                        height={100}
                        loading='lazy'
                        alt='journey one'
                    />
                </div>
                <div className='flex lg:flex-row flex-col-reverse justify-between md:gap-y-8 gap-y-6 gap-x-4 items-center'>
                    <Image
                        src='/images/aj2.webp'
                        width={400}
                        height={100}
                        loading='lazy'
                        alt='journey one'
                    />
                    <span className='flex flex-col sm:gap-y-3 gap-y-2 max-w-[450px]'>
                        {/* <HeadingOne className='lg:text-start text-center text-amber md:text-4xl sm:text-4xl text-3xl'>
                            2015
                        </HeadingOne>
                        <HeadingOne className='lg:text-start text-center md:text-4xl sm:text-4xl text-3xl'>
                            Expansion und Innovation
                        </HeadingOne> */}
                        {/* <Para className='lg:text-start text-center text-black'>
                            Agypten Travell is founded with a vision to revolutionize the travel industry, driven by a passion for exploration and a commitment to unparalleled customer experiences.
                        </Para> */}
                        <ul className="lg:text-start text-center text-black list-disc pl-5">
                            <li>
                                <strong>Geführte Touren:</strong> Unsere erfahrenen und zertifizierten Reiseleiter führen Sie zu den bekanntesten Sehenswürdigkeiten wie den Pyramiden von Gizeh, dem Tal der Könige, Luxor und der ägyptischen Hauptstadt Kairo.
                            </li>
                            <li>
                                <strong>Wüstensafaris:</strong> Erleben Sie die endlosen Weiten der ägyptischen Wüste mit spannenden Jeep-Safaris und aufregenden Aktivitäten wie Sandboarding und Beduinen-Camping.
                            </li>
                            <li>
                                <strong>Rundreisen und individuelle Erlebnisse:</strong> Wir bieten maßgeschneiderte Touren, die Ihre Interessen und Wünsche widerspiegeln – ob Sie die antiken Monumente der Pharaonen oder die tropische Unterwasserwelt im Roten Meer entdecken möchten.
                            </li>
                            <li>
                                <strong>Bootstouren und Tauchen:</strong> Genießen Sie die wunderschönen Küsten des Roten Meeres bei einer Bootsfahrt, einem Tauchgang oder einem entspannenden Tag auf einer Luxus-Yacht.
                            </li>
                            <li>
                                <strong>Kulturelle Erlebnisse:</strong> Tauchen Sie ein in die ägyptische Kultur mit Besuchen traditioneller Märkte, Kunsthandwerksdörfer und kulinarischen Erlebnissen.
                            </li>
                        </ul>


                    </span>

                </div>
                <div className='flex lg:flex-row flex-col justify-between md:gap-y-8 gap-y-6 gap-x-4 items-center'>
                    <span className='flex flex-col sm:gap-y-3 gap-y-2 max-w-[450px]'>
                        {/* <HeadingOne className='lg:text-start text-center text-amber md:text-4xl sm:text-4xl text-3xl'>
                            2024
                        </HeadingOne>
                        <HeadingOne className='lg:text-start text-center md:text-4xl sm:text-4xl text-3xl'>
                            Eine neue Ära der Erforschung
                        </HeadingOne>
                        <Para className='lg:text-start text-center text-black'>
                            Agypten Travell is founded with a vision to revolutionize the travel industry, driven by a passion for exploration and a commitment to unparalleled customer experiences.
                        </Para> */}
                        <ul className="lg:text-start text-center text-black list-disc pl-5">
                            <li>
                                <strong>Erfahrung und Expertise:</strong> Mit jahrelanger Erfahrung im Tourismus wissen wir, wie man Ihre Reise zu etwas ganz Besonderem macht. Unsere Guides sprechen mehrere Sprachen und sind tief in der Geschichte und Kultur Ägyptens verwurzelt.
                            </li>
                            <li>
                                <strong>Sicherheit und Komfort:</strong> Ihre Sicherheit und Ihr Komfort haben für uns oberste Priorität. Wir arbeiten mit hochqualifizierten Fahrern und modernsten Fahrzeugen, um Ihre Ausflüge so angenehm und sicher wie möglich zu gestalten.
                            </li>
                            <li>
                                <strong>Nachhaltigkeit:</strong> Wir setzen auf nachhaltigen Tourismus und respektieren die Umwelt und die lokalen Gemeinschaften. Unsere Touren fördern die Erhaltung des kulturellen Erbes und tragen zu einer positiven Entwicklung des Landes bei.
                            </li>
                        </ul>

                    </span>
                    <Image
                        src='/images/aj3.webp'
                        width={400}
                        height={100}
                        loading='lazy'
                        alt='journey one'
                    />
                </div>
            </main>
            <div className='sm:mt-8 mt-6'>
                <p className="lg:text-start text-center text-black">
                    <strong>Kontaktieren Sie uns:</strong> Egal, ob Sie ein Abenteuer, Kultur oder Entspannung suchen – wir haben die perfekte Tour für Sie!
                    <br />
                    Lassen Sie sich von uns die Schönheiten Ägyptens zeigen und erleben Sie unvergessliche Momente.
                    <br />

                </p>
                <div className='mt-4 sm:text-start text-center'>
                    <strong>
                        Ihr Tor zu Ägyptens Wundern!
                    </strong>
                </div>

            </div>
        </MaxWidthWrapper>
    )
}

export default AboutJourney
