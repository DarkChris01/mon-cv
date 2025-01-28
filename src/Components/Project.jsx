export default function Project() {

    return (<>
        <h2 className="border-b border-gray-200 mb-3">Mes projets</h2>
        <ol>
            <li className="my-4">
                <div>
                    <div>
                        <a className="flex items-center" href="https://github.com/DarkChris01/carrerApp.git" target="_blank">
                        <h3 className="font-bold text-lg me-2">Mycarrer</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                            </svg>

                        </a>
                    </div>
                    <div className="px-1">
                        <p className="my-1">
                            {/* inserer l'addresse du site une fois hebergé */}
                            est une application web moderne dédiée à la mise en relation entre recruteurs et candidats à travers une plateforme intuitive et performante.
                        </p>
                        <div>
                            <u> Emplementé avec les technologies </u>:

                            <ul className="my-1">
                                <li><strong> Sveltkit</strong> en Front-end </li>
                                <li><strong> Laravel </strong> en Back-end</li>
                                <li><strong> Inertia </strong> pour le routage et les requêtes</li>
                            </ul>
                            Une plateforme fluide offrant une expérience utilisateur optimisée, adaptée aux besoins des deux parties (employeurs et candidats).
                        </div>
                    </div>
                </div>
            </li>
            {/* ajouter d'autres projets au fil du temps */}
            {/* <li className="my-4">
                <div>
                    <div className="flex items-center">
                        <h3 className="font-bold text-lg me-2">Mycarrer</h3>
                        <a href="https://github.com/DarkChris01/carrerApp.git">https://github.com/DarkChris01/carrerApp.git</a>
                    </div>
                    <div className="px-2">
                        <p className="my-1">
                            <em><u className="text-indigo-600">Mycarrer</u></em> est une application web moderne dédiée à la mise en relation entre recruteurs et candidats à travers une plateforme intuitive et performante.
                        </p>
                        <div>
                            <u> Emplementé avec les technologies </u>:

                            <ul className="my-1">
                                <li><strong> Sveltkit</strong> en Front-end </li>
                                <li><strong> Laravel </strong> en Back-end</li>
                                <li><strong> Inertia </strong> pour le routage et les requêtes</li>
                            </ul>
                            Une plateforme fluide offrant une expérience utilisateur optimisée, adaptée aux besoins des deux parties (employeurs et candidats).
                        </div>
                    </div>
                </div>
            </li> */}
        </ol>
    </>)
} 