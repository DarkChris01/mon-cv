export default function Project() {

    return (<>
        <h2 className="border-b border-gray-200 mb-3">Mes projets</h2>
        <ol>
            <li className="my-4">
                <div>
                    <div className="flex items-center">
                        <h3 className="font-bold text-lg me-2">Mycarrer</h3>
                        <a href="https://github.com/DarkChris01/carrerApp.git" target="_blank">https://github.com/DarkChris01/carrerApp.git</a>
                    </div>
                    <div className="px-2">
                        <p className="my-1">
                            {/* inserer l'addresse du site une fois hebergé */}
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