function insertionSort(arr) {
    // Parcourir les éléments du tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        // Stocker l'élément actuel à insérer
        let current = arr[i];
        // Initialiser la variable j pour parcourir les éléments triés
        let j = i - 1;

        // Déplacer les éléments du tableau qui sont plus grands que current
        // d'une position vers la droite
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Déplacer l'élément vers la droite
            j--; // Décrémenter j pour continuer à vérifier les éléments précédents
        }
        // Insérer l'élément actuel à sa place
        arr[j + 1] = current; // Insérer current à la bonne position
    }

    return arr; // Retourner le tableau trié
}

// Exemple d'utilisation
const tableau = [5, 3, 8, 4, 2];
alert("Tableau original :", tableau);
const tableauTrie = insertionSort(tableau);
alert("Tableau trié :", tableauTrie);
