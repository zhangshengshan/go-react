package controllers

import (
	"go-react/models"
	"github.com/astaxie/beego"
	"strconv"
)

type PostController struct {
	beego.Controller
}

// @router / [get]
func (this *PostController) GetAll() {
	obs := models.GetAll()
	this.Data["json"] = obs
	this.ServeJSON()
}

func (this *PostController) Create() {
	var post models.Post
	this.ParseForm(&post)
	result, err := models.CreatePost(post)
	if (err != nil) {
		this.Abort("500")
	} else {
		this.Data["json"] = result
	}
	this.ServeJSON()
}

func (this *PostController) GetOne() {
	uid := this.GetString(":id")
	if uid == "" {
		this.Abort("403")
	}

	post, err := models.GetOnePost(uid)
	if (err != nil) {
		this.Abort("500")
	} else {
		this.Data["json"] = post
	}
	this.ServeJSON()
}

func (this *PostController) Update() {
	uid := this.GetString(":id")
	if uid == "" {
		this.Abort("403")
	}
	id, _ := strconv.Atoi(uid)
	post := models.Post{Id: id}
	this.ParseForm(&post)
	post, err := models.UpdatePost(post)
	if err != nil {
		this.Abort("500")
	} else {
		this.Data["json"] = post
	}

	this.ServeJSON()
}