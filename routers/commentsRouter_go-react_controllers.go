package routers

import (
	"github.com/astaxie/beego"
)

func init() {

	beego.GlobalControllerRouter["go-react/controllers:ObjectController"] = append(beego.GlobalControllerRouter["go-react/controllers:ObjectController"],
		beego.ControllerComments{
			"Post",
			`/`,
			[]string{"post"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:ObjectController"] = append(beego.GlobalControllerRouter["go-react/controllers:ObjectController"],
		beego.ControllerComments{
			"Get",
			`/:objectId`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:ObjectController"] = append(beego.GlobalControllerRouter["go-react/controllers:ObjectController"],
		beego.ControllerComments{
			"GetAll",
			`/`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:ObjectController"] = append(beego.GlobalControllerRouter["go-react/controllers:ObjectController"],
		beego.ControllerComments{
			"Put",
			`/:objectId`,
			[]string{"put"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:ObjectController"] = append(beego.GlobalControllerRouter["go-react/controllers:ObjectController"],
		beego.ControllerComments{
			"Delete",
			`/:objectId`,
			[]string{"delete"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:PostController"] = append(beego.GlobalControllerRouter["go-react/controllers:PostController"],
		beego.ControllerComments{
			"GetAll",
			`/`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:UserController"] = append(beego.GlobalControllerRouter["go-react/controllers:UserController"],
		beego.ControllerComments{
			"Post",
			`/`,
			[]string{"post"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:UserController"] = append(beego.GlobalControllerRouter["go-react/controllers:UserController"],
		beego.ControllerComments{
			"GetAll",
			`/`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:UserController"] = append(beego.GlobalControllerRouter["go-react/controllers:UserController"],
		beego.ControllerComments{
			"Get",
			`/:uid`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:UserController"] = append(beego.GlobalControllerRouter["go-react/controllers:UserController"],
		beego.ControllerComments{
			"Put",
			`/:uid`,
			[]string{"put"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:UserController"] = append(beego.GlobalControllerRouter["go-react/controllers:UserController"],
		beego.ControllerComments{
			"Delete",
			`/:uid`,
			[]string{"delete"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:UserController"] = append(beego.GlobalControllerRouter["go-react/controllers:UserController"],
		beego.ControllerComments{
			"Login",
			`/login`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["go-react/controllers:UserController"] = append(beego.GlobalControllerRouter["go-react/controllers:UserController"],
		beego.ControllerComments{
			"Logout",
			`/logout`,
			[]string{"get"},
			nil})

}
