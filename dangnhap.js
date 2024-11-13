
const video=document.getElementById("back");
const login=document.getElementById("dang-nhap")
document.getElementById("eye").addEventListener("click", function() {
    if(this.classList.contains('fa-eye-slash')){
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
        password.type='text';
    }else{
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
        password.type='password';
    }
});
document.getElementById("loa").addEventListener("click",function(){
    if(this.classList.contains("fa-volume-xmark")){
        this.classList.remove('fa-volume-xmark');
        this.classList.add('fa-volume-high');
        video.muted = false;
    }else{
        this.classList.remove('fa-volume-high');
        this.classList.add('fa-volume-xmark');
        video.muted = true;
    }
})


document.getElementById("dangki").addEventListener('submit',function(event){
    event.preventDefault();
    alert("đụ má")

})