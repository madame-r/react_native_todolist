const AppStyle = {
    main: {
        flex: 1,
    },

    img_header: {
        width: '100%',
        height: 300,
    },

    titre: {
        margin: 10,
        color: '#888D83',
        fontWeight: '900',
        fontSize: 30,
        textAlign: 'center',
    },

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    taskContainer: {
        flexDirection: 'row',  // Pour disposer le texte et la croix horizontalement
        justifyContent: 'space-between',  // Espacement entre le texte et la croix
        alignItems: 'center',  // Centrer verticalement
        marginVertical: 10,  // Ajouter un peu d'espace entre les items
    },

    task: {
        flex: 0.9,  // Réduit la largeur de la tâche (au lieu de 'flex: 1', on lui donne moins d'espace)
        padding: 10,
        backgroundColor: '#DDD9B3',
        borderRadius: 5,
        fontSize: 16,
    },

    deleteButton: {
        backgroundColor: '#888D83',
        borderRadius: 50,
        marginLeft: 10,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    clearAllContainer: {
        marginBottom: 30,
    },
    clearAllButton: {
        backgroundColor: '#760B07',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width:150,
        alignSelf:'center',
    },
    clearAllText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },

};


export { AppStyle };
