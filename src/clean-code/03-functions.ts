(() => {

    // Función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // Función para obtener el elenco de una película por Id
    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    // Función para obtener la biografía de un actor por Id
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película (agrupando más de 3 parámetros en un objeto)
    interface MovieOptions {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({ title, description, rating, cast }: MovieOptions) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor (nombre simple sin condicionales)
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // Tarea asíncrona para verificar si ya existe
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

})();