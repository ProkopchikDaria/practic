window.dom = (function () {
    var main = document.querySelector('main');
    var name = document.querySelector('.userName');
    var authorizationButton=document.querySelector('.authorization');
    var exitButton = document.querySelector('.exit');
    var addButton = document.querySelector('.buttonAdd');
    user: null;
    function createButtons(photoPost,buttonChange,buttonDelete,buttonLike) {
        if(this.user !== null && this.user !== photoPost.author){
            buttonChange.style.display='none';
            buttonDelete.style.display='none';
        }
        if(this.user === null || this.user === "undefined" ){
            buttonChange.style.display='none';
            buttonDelete.style.display='none';
            buttonLike.style.display='none';
        }
    }
    function settingsForButtonChange(buttonChange) {
        buttonChange.className = 'button';
        buttonChange.type = 'submit';
        buttonChange.value = 'Редактировать';
        buttonChange.name = 'change';
    }
    function settingsForButtonDelete(buttonDelete) {
        buttonDelete.className = 'button';
        buttonDelete.type = 'submit';
        buttonDelete.value = 'Удалить';
        buttonDelete.name = 'change';
    }
    function settingsForButtonLike(buttonLike) {
        buttonLike.className = 'like';
        buttonLike.type = 'submit';
        buttonLike.value = '♥';
        buttonLike.name = 'like';
    }
    function settingsForPost(post,photoPost) {
        post.className = 'photopost';
        post.id = photoPost.id;
    }
    function settingsForBackground(background){
        background.className = 'background';
    }
    function settingsForImageflex(imageflex){
        imageflex.className = 'imageflex';
    }
    function createInfoForPost(photoPost,author,date,image,tags,description){
        author.innerHTML = photoPost.author;
        date.innerHTML = photoPost.createdAt.toLocaleString();
        image.src = photoPost.photoLink;
        tags.innerHTML = photoPost.hashTags.reduce(function(element1,element2){
            return element1+','+element2;
        });
        description.innerHTML = photoPost.description;
    }
     function createPhotoPost (photoPost) {
        var post = document.createElement('div');
        settingsForPost(post,photoPost);
        var background = document.createElement('div');
        settingsForBackground(background);
        var imageflex = document.createElement('div');
        settingsForImageflex(imageflex);
        var section = document.createElement('section');
        var image = document.createElement('img');
        var form = document.createElement('form');
        var buttonChange = document.createElement('input');
        settingsForButtonChange(buttonChange);
        var buttonDelete = document.createElement('input');
        settingsForButtonDelete(buttonDelete);
        var description = document.createElement('p');
        var infoflex = document.createElement('div');
        var author = document.createElement('h5');
        var date = document.createElement('h5');
        var tags = document.createElement('h5');
        var buttonLike = document.createElement('input');
        settingsForButtonLike(buttonLike);
        createInfoForPost(photoPost,author,date,image,tags,description);
        form.append(buttonDelete,buttonChange);
        section.append(image,form,description);
        infoflex.append(author,date,tags,buttonLike);
        imageflex.append(section);
        background.append(imageflex,infoflex);
        createButtons(photoPost,buttonChange,buttonDelete,buttonLike);
        post.appendChild(background);
        return post;
    }
    return {
        changeUser: function (userName) {
            if (userName !== null && typeof userName != 'undefined') {
                user = userName;
                name.innerHTML = user;
            } else {
                user = null;
                name.innerHTML = 'Гость';
                exitButton.style.display='none';
                authorizationButton.style.display='initial';
                addButton.style.display='none';
            }
        },
        addPhotoPost: function(photoPost) {
            if(fun.addPhotoPost(photoPost)){
                main.insertBefore(createPhotoPost(photoPost),main.childNodes[0]);
                main.removeChild(main.childNodes[11]);
                return true;
            }
            return false;
        },
        getPhotoPosts: function(skip ,top ,filterConfig) {
            var posts = fun.getPhotoPosts(skip,top,filterConfig);
            for(var i = 0; i<posts.length; i++){
                main.appendChild(createPhotoPost(posts[i]));}
        },
        editPhotoPost: function(id,photoPost) {
            if(fun.editPhotoPost(id,photoPost)){
                main.replaceChild(createPhotoPost(fun.getPhotoPost(id)),document.getElementById(id));
                return true;
            }
            return false;
        },
        removePhotoPost: function(id) {
            if(fun.removePhotoPost(id)){
                main.removeChild(document.getElementById(id));
                var posts = fun.getPhotoPosts(0,10);
                main.appendChild(createPhotoPost(posts[9]));
                return true;
            }
            return false;
        }
    }
})()

var photoPostEdit3 = {
    description: 'Поменяли'
};
var photoPostAdd3 = {
        id: '22',
        author: 'Арина',
        createdAt: new Date('2018-03-12T12:20:04'),
        photoLink: 'http://droplak.ru/wp-content/uploads/2016/04/5-8.jpg',
        description: 'Шоколадный',
        likes: [],
        hashTags: ['шоколад', 'кот']
    };

dom.changeUser('Дарья');
dom.getPhotoPosts(0,10);
dom.addPhotoPost(photoPostAdd3);
dom.removePhotoPost('1');
dom.editPhotoPost('3',photoPostEdit3);

/*Пример для неавторизированного пользователя*/

// dom.changeUser();
// dom.getPhotoPosts(0,10);
