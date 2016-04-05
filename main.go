package main

import (
	_ "go-react/docs"
	_ "go-react/routers"

	"github.com/astaxie/beego"
	_ "github.com/go-sql-driver/mysql"
	"github.com/astaxie/beego/orm"
)

// 系统初始化
func init() {
	mysqluser := beego.AppConfig.String("mysqluser")
	mysqlpass := beego.AppConfig.String("mysqlpass")
	//mysqlurls := beego.AppConfig.String("mysqlurls")
	mysqldb := beego.AppConfig.String("mysqldb")
	orm.RegisterDriver("mysql", orm.DRMySQL)
	// 连接本机
	//orm.RegisterDataBase("default", "mysql", "ngem:cloud1688@/ngem")
	orm.RegisterDataBase("default", "mysql", mysqluser + ":" + mysqlpass + "@/" + mysqldb)
	//orm.RegisterDataBase("default", "msyql", "")

	// 如有需要，可以执行自动建表
	//createTable()
}

//自动建表
func createTable() {
	name := "default"                          //数据库别名
	force := false                             //不强制建数据库
	verbose := true                            //打印建表过程
	err := orm.RunSyncdb(name, force, verbose) //建表
	if err != nil {
		beego.Error(err)
	}
}

func main() {
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	}
	beego.SetStaticPath("/static", "static")
	beego.Run()
}
