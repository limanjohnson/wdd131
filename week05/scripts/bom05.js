const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem('favChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('favChapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // slice off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent); // This function is needed to remove the chapter from the array and local storage.
        input.focus();
    })
    console.log('It worked papi!')
}

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }

})

// add chapter
// button.addEventListener('click', function() {
//     if (input.value.trim() !== '') {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');
//
//         li.textContent = input.value;
//         deleteButton.textContent = "❌";
//
//         li.append(deleteButton);
//
//         list.append(li);
//         // Delete list item
//         deleteButton.addEventListener("click", function() {
//             list.removeChild(li);
//             input.focus();
//         });
//
//         input.value = "";
//         input.focus();
//     }
// });




