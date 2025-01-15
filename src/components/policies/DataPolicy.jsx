import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingThree from '../reuseable/HeadingThree';
import Para from '../reuseable/Para';
import Link from 'next/link';

function DataPolicy() {
    return (
        <MaxWidthWrapper className='max-w-screen-xl mx-auto py-10 sm:mt-16 mt-12'>
            <h1 className='text-lg font-semibold text-black'>
                Datenschutzerklärung
            </h1>
            <Para className='mt-4'>
                Durch die Nutzung unserer Website oder das Bereitstellen Ihrer Informationen erklären Sie sich mit den folgenden Nutzungsbedingungen einverstanden und bestätigen, dass Sie diese gelesen und verstanden haben.
            </Para>
            <h2 className='mt-5 text-lg font-semibold text-black'>
                Was sind Cookies?
            </h2>
            <div className='mt-4 '>
                <Para>
                    <strong>
                        Visitors for Touristic Marketing {` `}
                        <Link
                            className='whitespace-normal'
                            href={'/https://aegyptenmalanders.de'}
                        >
                            https://aegyptenmalanders.de/, https://adventuresegypt.com
                        </Link>
                    </strong>
                    {` `}
                    setzt die branchenübliche „Cookie“-Technologie ein. Cookies sind kleine Dateneinheiten, die auf Ihrem Gerät gespeichert werden, wenn Sie bestimmte Bereiche unserer Website besuchen. Ihr Hauptzweck ist es, zu verstehen, welche Bereiche unserer Seite besonders beliebt sind und in welchen Bereichen Nutzer am meisten Zeit verbringen. So können wir die Benutzererfahrung an Ihre Präferenzen anpassen und die Interaktivität verbessern. Cookies werden auch verwendet, um personalisierte Werbung, einschließlich Werbung von Drittanbietern, anzuzeigen.
                </Para>
            </div>
            <h2 className='mt-5 text-lg font-semibold text-black'>
                Funktionsweise der Cookies:
            </h2>
            <Para className='mt-4'>
                Wir verwenden sowohl temporäre Cookies während Ihrer Browsersitzung als auch dauerhafte Cookies bei wiederholtem Besuch der Website. Diese Cookies ermöglichen folgende Funktionen:
            </Para>
            <ul className='mt-4 list-disc sm:ms-8  ms-6 flex flex-col gap-y-2'>
                <li className='text-base'>
                    <strong>
                        Anpassung
                    </strong>
                    : Optimierung Ihrer Browsererfahrung für eine verbesserte Nutzung.
                </li>
                <li className='text-base'>
                    <strong>
                        Analyse
                    </strong>
                    : Identifizierung von Bereichen, die verbessert werden können, um den
                </li>
                <li className='text-base'>
                    <strong>
                        Geolokalisierung
                    </strong>
                    : Bereitstellung standortbasierter Dienste. Sie können diese Funktion jedoch jederzeit in den Einstellungen Ihres Browsers deaktivieren
                </li>
            </ul>
            <h3 className='mt-5 text-lg font-semibold text-black'>
                Technische Cookies von Drittanbietern:
            </h3>
            <Para className='mt-4'>
                Diese Cookies ermöglichen es uns, zusätzliche, verbesserte Dienste anzubieten:
            </Para>
            <ul className='mt-4 list-disc sm:ms-8  ms-6 flex flex-col gap-y-2'>
                <li className='text-base'>
                    <strong>
                        Google Analytics
                    </strong>
                    : Ein Webanalysetool von Google Inc., das zur Verfolgung und Analyse der Website-Nutzung dient. Die gesammelten Daten helfen dabei, Berichte zu erstellen und mit anderen Google-Diensten zu teilen. Google kann diese Daten verwenden, um personalisierte Werbung innerhalb seines eigenen Werbenetzwerks auszuspielen.
                </li>
            </ul>


            <h4 className='mt-5 text-lg font-semibold text-black'>
                Externe soziale Netzwerke und andere Plattformen:
            </h4>
            <ul className='mt-4 list-disc sm:ms-8  ms-6 flex flex-col gap-y-2'>
                <li className='text-base'>
                    <strong>
                        Interaktionen mit sozialen Netzwerken
                    </strong>
                    : Über bestimmte Dienste können Sie direkt von unserer Website aus mit sozialen Netzwerken oder anderen externen Plattformen interagieren. Informationen und Interaktionen, die über diese Dienste gewonnen werden, unterliegen den Datenschutzeinstellungen des Nutzers. Selbst wenn Sie nicht aktiv interagieren, können Daten über Ihren Besuch auf Seiten, die diese Dienste nutzen, gesammelt werden.
                </li>

            </ul>

            <div className='text-base sm:ms-6 ms-2 sm:mt-8 mt-6'>
                o <strong>
                    Facebook „Gefällt mir“-Schaltfläche und soziale Widgets
                </strong>
                : Diese Funktionen ermöglichen es Ihnen, mit dem sozialen Netzwerk Facebook zu interagieren. Die erhobenen Daten unterliegen den Datenschutzrichtlinien von Facebook Inc.
            </div>
            <div className='text-base sm:ms-6 ms-2 mt-4'>
                o <strong>
                    Twitter-Konto-Integratio
                </strong>
                :   Diese Funktion erlaubt unserer Website den Zugriff auf Ihr Twitter-Konto, sofern Sie dies autorisieren.
            </div>
            <div className='text-base sm:ms-6 ms-2 mt-4'>
                o <strong>
                    Facebook-Konto-Integration
                </strong>
                :    Diese Funktion erlaubt unserer Website den Zugriff auf Ihr Facebook-Konto, sofern Sie dies autorisieren.
            </div>
            <Para className='mt-4'>
                Bitte beachten Sie, dass diese Dienste standardmäßig nicht aktiviert sind und Ihre ausdrückliche Zustimmung erforderlich ist, bevor eine Verbindung zu diesen sozialen Netzwerken hergestellt wird
            </Para>
        </MaxWidthWrapper >
    )
}

export default DataPolicy;
