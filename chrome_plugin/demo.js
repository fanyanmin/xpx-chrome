// 账号页面
function user(){
    let url="https://sycm.taobao.com/custom/user_info";
    if(location.href!=url){
        window.location.href=url;
    }
}
// 市场页面
function shichang(){
    $(".sycm-common-picker-cate .vip").click()
    $(".ebase-FaCommonFilter__left .common-picker-header").click()
    setTimeout(function(){
        $(".tree-scroll-menu-level-1 .sycm-common-picker-item").click()
    },1000)
    setTimeout(function(){
        var uv;
        var cltByrCnt;
        var cartByrCnt;
        var shijian;
        $(".oui-date-picker .oui-date-picker-current-date").each(function(){
            shijian=$(this).text().split(/\s+/)[1];
        })
        $(".oui-index-cell[value='uv'] .oui-index-cell-indexValue").each(function(){
            uv=$(this).text().replace(/,/g,"");
        });   
        $(".oui-index-cell[value='cltByrCnt'] .oui-index-cell-indexValue").each(function(){
            cltByrCnt=$(this).text().replace(/,/g,"");
        });
        $(".oui-index-cell[value='cartByrCnt'] .oui-index-cell-indexValue").each(function(){
                cartByrCnt=$(this).text().replace(/,/g,""); 
        });  
        var shichang={};
            shichang.fangke=uv;
            shichang.shoucang=cltByrCnt;
            shichang.jiagou=cartByrCnt;
            shichang.date=shijian;
            var str=JSON.stringify(shichang);
            console.log(str);
            $.ajax({
                type:"post",
                url:"https://dev.xpxiong.com/api/collection/shichang",
                data:{
                    data:str
                },
                async:true,
                success:function(res){
                    console.log(res)
                }
            });
    },3000)
}
function SH(){
    let url="https://sycm.taobao.com/mc/mq/overview?cateFlag=1&cateId=16";
    if(location.href!=url){
        window.location.href=url;
    }
}
//******************************************************************************************* */
// 赤兔页面
var timestamp=new Date().getTime();
function chitu(){
    // let urls=location.href;
    // if(urls!=urls.startsWith("https://newkf.topchitu.com/customkpi/shop")){
    //     window.location.href="https://newkf.topchitu.com/customkpi/shop/"
       
    // }
    // url.startsWith("https://sycm.taobao.com/flow/monitor/shopsource/construction")
    
    
    let url="https://newkf.topchitu.com/customkpi/shop/92/viewkpi.shtml";
    // https://newkf.topchitu.com/customkpi/shop/1290/viewkpi.shtml
    if(location.href!=url){
        window.location.href=url;
    }
}
//*************************************************************************************** */
function ct(){
    var store;
    $("#text-group-name").each(function(){
        store=$(this).text().split(":")[1].replace(/\ +/g,"").replace(/[\r\n]/g,"");
    })
    var objs=[]
    var obj1={}
    var tab=document.getElementById("myTable");
    var rows=tab.rows;
    for(var i=0;i<2;i++){ //遍历表格的行
       for(var j=0;j<rows[i].cells.length;j++){  //遍历每行的列
        obj1[rows[0].cells[j].innerText]=rows[i].cells[j].innerText//    console.log("第"+(i+1)+"行，第"+(j+1)+"列的值是:"+rows[i].cells[j].innerHTML);
       }
    }
    objs.push(obj1)
    var obj={}
    var tab=document.getElementById("myTable");
    var rows=tab.rows;
    for(var i=0;i<3;i++){ //遍历表格的行
       for(var j=0;j<rows[i].cells.length;j++){  //遍历每行的列
        obj[rows[0].cells[j].innerText]=rows[i].cells[j].innerText
       }
    }
    objs.push(obj)
    objs.push(store)
    var all=JSON.stringify(objs)
    console.log(all)
    $.ajax({
            type:"post",
            url:"https://dev.xpxiong.com/api/collection/chitu",
            data:{
                data:all
            },
            async:true,
            success:function(res){
                console.log(res)
            }
        });
}
// 商品效果页面
function cookie(){
    let url="https://sycm.taobao.com/bda/items/effect/item_effect.htm?spm=a21ag.7634348.LeftMenu.d248.4fb57560FRSiAR#/?cateId=0&cateType=0";
    if(location.href!=url){
        window.location.href=url;
    }
}
function spdate(){
    var store;
    $(".ebase-frame-header-root .ebase-frame-header-top .current-shop-item-title").each(function(){
        store=$(this).text()
    })
    localStorage.setItem("stores",store)
    $(".screen-header .dtpicker-main .num").each(function(){
        var str=$(this).text()
        var s = str.replace("（","");
        s = s.replace("）","");
        var ss=s.split("~")[0]
        var data={}
        data.date=ss;
        data.store=store;
        data=JSON.stringify(data)
        console.log(data)
        $.ajax({
            type:"post",
            url:"https://dev.xpxiong.com/api/collection/shangping",
            data:{
                data:data
            },
            async:true,
            success:function(res){
                console.log(res)
            }
        });
    })
}
// 流量页面
function liul(){
    let url="https://sycm.taobao.com/flow/monitor/shopsource/construction?belong=all";
    if(window,location.href!=url){
        window.location.href=url;
    }
}
function liuliang(){
    // var store
    // $(".ebase-frame-header-root .ebase-frame-header .ebase-Selector__title").each(function(){
    //     store=$(this).text()
    // })
    var store=localStorage.getItem("stores")
    $("#content-container .oui-date-picker-particle-button .oui-canary-btn").eq(4).click(function(){
            console.log("dianzhao")
        }).click()
    setTimeout(function(){
        $("#content-container .oui-date-picker-current-date").each(function(){
            var sh=$(this).text().split(/\s+/)[1];
            var data={}
            data.date=sh;
            data.store=store;
            data=JSON.stringify(data)
            console.log(data)
            $.ajax({
                type:"post",
                url:"https://dev.xpxiong.com/api/collection/flow",
                data:{
                    data:data
                },
                async:true,
                success:function(res){
                    console.log(res)
                }
            });
        })
    },1000)
}
// 库存页面
function daochu(){
    let url="http://tb.maijsoft.cn/index.php?r=export/index";
    if(location.href!=url){
        window.location.href=url;
    }
}
function expor(){
    var store
    $(".navbar-inner .pull-right li").eq(0).each(function(){
        store=$(this).text().split("，")[1].split(":")[0]
    })
        setTimeout(function(){
            $(".s-check .all-selector").each(function(){
                if($(this).prop("checked")!=true){
                    $(".s-check .all-selector").click();
                    setTimeout(function(){
                        $(".s-check .all-selector").click();
                    },1000)
                }else{
                    $(".s-check .all-selector").click();
                }
            })
        },1000)
    setTimeout(function(){
        $("#J_num_iid").click();
        $("#J_approve_status").click();
        $("#J_link").click();
        $("#J_prop_122216347").click();
        $("#J_title").click();
        $("#J_price").click();
        $("#J_prom_price").click();
        $("#J_num").click();
        $("#J_outer_id").click();
    },3000)
    console.log("daochudaochudaochu")
    var timer=setTimeout(function(){
        $("#J_startBtn").on("click",function(){
            console.log("start")
        }).click()
    },4000);
    var timer1=setTimeout(() => {
        $(".modal-footer .btn-primary").on("click",function(){
            console.log("tow")
        }).click()
    }, 6000);

var time;
var s=setInterval(function(){
    $("#J_viewProgress ").contents().find("#J_progressPercent").each(function(){
        time=$(this).text()
    })
    console.log(time)
    if(time=="100%"){
        clearInterval(s)
        setTimeout(function(){
            $("#J_viewProgress ").contents().find("#J_returnBtn0").on("click",function(){
                console.log("str")
           }).click();
        },1000)
        setTimeout(function(){
        $("#J_logListBox #J_logList tr:first a").eq(0).each(function(){
            var href=$(this).attr('href')
                var data={}
                data.href=href;
                data.store=store;
                data=JSON.stringify(data)
                console.log(data)
                $.ajax({
                type:"post",
                url:"https://dev.xpxiong.com/api/collection/stock",
                data:{
                    data:data,
                },
                async:true,
                success:function(res){
                    console.log(res)
                    console.log("完成")
                    nextexpor();
                }
            });
           
        })
    },3000)
    }
},8000)
// }
function nextexpor(){
   
    $(function(){
        $("#J_itemStatusInstock").click(function(){
            if($(this).prop("checked")==true){
                console.log("仓库");
            } else{
                $("#J_itemStatusInstock").click();
            }
        }).click();
        setTimeout(function(){
            $("#J_instockStatus").val("all_instock")
        },1000)
    })
    setTimeout(function(){
        $(function(){
           
            $("#J_shopCats").click(function(){
                if($(this).prop("checked")==true){
                    console.log("分类");
                } else{
                    $("#J_shopCats").click();
                }
            }).click();
        })
    },1000);
    setTimeout(function(){
        $(function(){
            $(".J_shopParentCat").eq(4).click(function(){
                if($(this).prop("checked")==true){
                    console.log("新品");
                } else{
                     $(".J_shopParentCat").eq(4).click();
                }
            }).click();
        })
    },2000);
    setTimeout(function(){
        $(".s-check .all-selector").each(function(){
            if($(this).prop("checked")!=true){
                $(".s-check .all-selector").click();
                setTimeout(function(){
                    $(".s-check .all-selector").click();
                },1000)
            }else{
                $(".s-check .all-selector").click();
            }
        })
    },1000)
    setTimeout(function(){
        $("#J_num_iid").click();
        $("#J_price").click();
        $("#J_prop_122216347").click();
        $("#J_outer_id").click();
    },3000)
    clearTimeout(timer)
    var timer2=setTimeout(function(){
        $("#J_startBtn").on("click",function(){
            console.log("start")
        }).click()
    },4000);
    clearTimeout(timer1)
    var timer3=setTimeout(() => {
        $(".modal-footer .btn-primary").on("click",function(){
            console.log("tow")
        }).click()
    }, 6000);

setTimeout(function(){
    var times;
    clearInterval(s)
    var ss=setInterval(function(){
        $("#J_viewProgress ").contents().find("#J_progressPercent").each(function(){
            times=$(this).text()
        })
        console.log(times)
        if(times=="100%"){
            clearInterval(ss)
            setTimeout(function(){
                $("#J_viewProgress ").contents().find("#J_returnBtn0").on("click",function(){
                    console.log("str")
            }).click();
            },1000)
            setTimeout(function(){
                $("#J_logListBox #J_logList tr:first a").eq(0).each(function(){
                    var hrefs=$(this).attr('href')
                         console.log(store)
                         var data={}
                         data.href=hrefs;
                         data.store=store;
                         data=JSON.stringify(data)
                        console.log(data);
                        $.ajax({
                        type:"post",
                        url:"https://dev.xpxiong.com/api/collection/match",
                        data:{
                            data:data,
                        },
                        async:true,
                        success:function(res){
                            console.log(res)
                            console.log("完成")
                            setTimeout(function(){
                                chrome.runtime.sendMessage({greeting: 'stop'}, function(response) {
                                    console.log(response);
                                });
                            },2000)
                        }
                        });
                })
            },3000)
        }
    },7000)
},7000)
}
}

// 取数页面
function qs(){
    var url="https://mai.taobao.com/seller_admin.htm";
    if(window.location.href!=url){
        window.location.href=url;
    }
}
function qushu(){
    var store;
    $("#panel_40002 .main .title").each(function(){
        store=$(this).text()
    })
    var e={};

    let ele = document.querySelectorAll("#panel_40002 .data-info-content")[1];
    ele.addEventListener('mouseover',function(){
        console.log('native') 
    });
    var event = document.createEvent('MouseEvents');
    event.initEvent("mouseover", true, true);
    ele.dispatchEvent(event);
    // console.log(ele)
    setTimeout(function(){
        let res = $.map($('.next-overlay-wrapper .score'),(ele,idx)=>{
            // console.log(ele,idx);
            return ele.innerText;
    });
        e.percentage=res;
        e.store=store;
        var s=JSON.stringify(e)
        console.log(s)
        $.ajax({
            type:"post",
            url:"https://dev.xpxiong.com/api/collection/score",
            data:{
                data:s
            },
            async:true,
            success:function(res){
                console.log(res)
            }
        });
       
    },2000)
}

function Datas(){
    var url="https://sycm.taobao.com/adm/v2/my";
    if(window.location.href!=url){
        window.location.href=url;
    }
}
function datas(){
// var store;
// $(".ebase-frame-header-changeShopWrapper .ebase-Selector__title").each(function(){
//     store=$(this).text()
// })
var store=localStorage.getItem("stores")
$(".oui-card-header .oui-tab-switch-item").eq(1).click();
setTimeout(function(){
    var buton=false;
    $(".ant-table-tbody .ant-table-row .report-name").each(function(){
        var name=$(this).text()
        if(name=="店铺数据"){
            buton=true;
            $(this).parents("tr").find('.action-wrapper a:first')[0].click();
            setTimeout(function(){
                var date;
                $(".ant-modal-body .ant-table-scroll .ant-table-fixed .ant-table-tbody tr:first td:first").each(function(){
                    date=$(this).text()
                })
                console.log(date)
                var timenow = new Date();
                timenow.setDate(timenow.getDate() - 1); //设置天数 -1 天，昨天的日期
                var y = timenow.getFullYear();//年
                var m = timenow.getMonth() + 1;//月
                m = m < 10 ? '0' + m : m;
                var d = timenow.getDate();//日
                d = d < 10 ? ('0' + d) : d;
                var yesterdayTime = y + '-' + m + '-' + d;//字符串拼接成自己想要的时间格式，现在是yyyy/dd格式
                console.log(yesterdayTime)
                if(date==yesterdayTime){
                    var title=[];
                    var datas=[];
                    var all={}
                    $(".ant-modal-body .ant-table-scroll .ant-table-fixed .ant-table-thead tr th").each(function(){
                        title.push($(this).text());
                    }) ;
                    $(".ant-modal-body .ant-table-scroll .ant-table-fixed .ant-table-tbody tr:first td").each(function(){
                        datas.push($(this).text());
                    })
                    all.title=title;
                    all.data=datas;
                    all.store=store;
                    all=JSON.stringify(all)
                    console.log(all)
                    $.ajax({
                        type:"post",
                        url:"https://dev.xpxiong.com/api/collection/qushu",
                        data:{
                            data:all
                        },
                        async:true,
                        success:function(res){
                            console.log(res)
                            qs()
                        }
                    });
                }else{
                    //不是今天的数据,下一个页面
                    qs()
                }
            },2000)
        }
        setTimeout(function(){
            // console.log(buton)
            if(buton==false){
                qs()
            }
        },1000)
    })
},3000)
    
}
var switches
chrome.runtime.sendMessage({greeting: '你好，我是content-script呀，我主动发消息给后台！'}, function(response) {
    console.log('收到来自后台的回复：' + response);
    switches=response 
    if(switches==true){
        let url=location.href;
        let url1="https://sycm.taobao.com/custom/user_info";
        if(location.href==url1){
            setTimeout(function(){
                $(".ebase-frame-header-root .ebase-Selector__title").each(function(){
                    var name=$(this).text()
                    console.log(name)
                    if(name=="crz旗舰店"){
                        SH()
                    }else{
                        CC()
                    }
                    })
            },1000)
        }
        switch(url){
            case "https://newkf.topchitu.com/homepage/homepage.shtml"://模拟当前页面为赤兔页面
                setTimeout(function(){
            //         CC();//模拟跳转到库存页面
                    chitu();
                },1000)
                break;
            case "https://newkf.topchitu.com/customkpi/1219/viewkpi.shtml"://模拟当前页面为赤兔页面
                setTimeout(function(){
            //         CC();//模拟跳转到库存页面
                    chitu();
                },1000)
                break;
            case "http://tb.maijsoft.cn/index.php?r=site/index":
                setTimeout(function(){
                    aa(); //模拟跳到商品效果页面
                },2000)
                break; 
            // 取数开始
            case "https://sycm.taobao.com/adm/v2/my":
                setTimeout(function(){
                    datas()
                },2000)
                break;
            // case "https://myseller.taobao.com/home.htm":
            //     setTimeout(function(){
            //         daochu();//跳转到商品效果
            //     },5000)
            case "https://mai.taobao.com/seller_admin.htm":
                setTimeout(function(){
                    qushu()//当前为取数页面取数
                },2000)
                console.log("首页");
                setTimeout(function(){
                    daochu()
                },5000)
                break;
            case "https://sycm.taobao.com/mc/mq/overview?cateFlag=1&cateId=16":
                setTimeout(function(){
                    shichang();//运营账号市场取数
                },3000)
                setTimeout(function(){
                    CC();
                },7000)
                break;
            case "http://tb.maijsoft.cn/index.php?r=export/index":
                expor();//当前为库存页面取数
                break;
            case "https://newkf.topchitu.com/noAuth.htm":
                setTimeout(function(){
                    Datas()
                },1000)
                break;
        }
        if(url.startsWith("https://sycm.taobao.com/flow/monitor/shopsource/construction")){
            setTimeout(function(){
                liuliang()//当前为流量页面取数
            },3000);
            setTimeout(function(){
                SS()//模拟跳到赤兔页面
            },6000)
        }
        else if(url.startsWith("https://newkf.topchitu.com/customkpi/shop/")){
          
            setTimeout(function(){
                ct();//当前为赤兔页面取数
            },1000)
            setTimeout(function(){
                // qs()//跳转到取数页面
                Datas()
            },3000);
        }
        else if(url.startsWith("https://fuwu.taobao.com/ser/detail.htm")){
            setTimeout(function(){
                Datas()
            },3000);
        }
        
        else if(url.startsWith("http://container.api.taobao.com/container")){
            setTimeout(function(){
                Datas()
            },3000);
        }
        else if(url.startsWith("https://sycm.taobao.com/bda/items/effect/item_effect.htm?spm=a21ag.7634348.LeftMenu.d248.4fb57560FRSiAR#/?cateId=0&cateType=0&")){
            setTimeout(function(){
                spdate()//当前为商品效果页面取数
            },2000)
            setTimeout(function(){
                liul()//随后跳转到流量页面
            },6000)
        }else if(url.startsWith("https://sycm.taobao.com/cc/macroscopic_monitor")){
             setTimeout(function(){
                cookie()//跳转到cookie页面
            },2000)
        }
    }
});
var s={}
var store;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
            if(request.greeting == "cookie"){
                s.cookie=request.s
                $(".ebase-frame-header-root .ebase-frame-header-top .current-shop-item-title").each(function(){
                    store=$(this).text()
                })
                var sto={}
                sto.store=store;
                s.sto=sto;
                s=JSON.stringify(s);
                console.log(s);
                setTimeout(function(){
                    console.log(222222222)
                    $.ajax({
                        type:"post",
                        url:"https://dev.xpxiong.com/api/collection/cookie",
                        data:{
                            data:s
                        },
                        async:true,
                        success:function(res){
                            console.log(6666666)
                            console.log(res)
                        }
                    });
                },1000)
        }

        if (request.greeting == "start"){
           switches=request.switches
           console.log(switches)
           if(switches=true){
               user();
            // shichang()
            //    datas()
            //    qushu();
            //    liuliang()
            // ct()
            // ();  
            // spdate()
            // cookie();
            // ct();
            // expor()
            // nextexpor()
            // qushu()
            // datas()
            }
        }
        else
            sendResponse("FUCK OFF");
    }
);
// 模拟跳到赤兔
function SS(){
    // https://newkf.topchitu.com/noAuth.htm
    setTimeout(function(){
        window.location.href= "https://topauth.taobao.com/container/transform?appkey=12090519"
    },1000)
}
// 模拟跳到库存
function CC(){
    setTimeout(function(){
        window.location.href= "https://h5.m.taobao.com/qn/pc/2-03-00/plugin-guide.html?appkey=12502150"
    },1000)
}
// 模拟跳到商品效果页面
function aa(){
    setTimeout(function(){
        window.location.href= "https://sycm.taobao.com/cc/macroscopic_monitor?spm=a21ag.8718589.TopMenu.d1800.33db50a5PCfVHX#item-rank"
    },1000)
}


