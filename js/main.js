$(function () {
    main();
    //arun.add_icon($master);
});
const baseUrl = './img/';
const baseCreature = baseUrl + 'creature/';
const baseItem = baseUrl + 'item/';

function main() {
    var temp = {};
    var local = $master.local;
    $.each($master.api.item, function (key, value) {
        var tempX = [],tempY=[];
        tempX.push(key);
        if (value.type) tempX.push(value.type);
        if (value.level) tempX.push(value.level);
        if (value.rarity) tempX.push(value.rarity);
        if (value.description) tempY.push(value.description);
        if (value.recipe && value.recipe.name) tempY.push(value.recipe.name);
        tempX = tempX.join(' ').toUpperCase();
        tempY = tempY.join(' ').toUpperCase();
        local.array_backup.push({
            name: key,
            type: 'item',
            optional: tempX,
            optional2: tempY
        });
    });
    $.each($master.api.creature, function (key, value) {
        var tempX = [],tempY=[];
        tempX.push('creature');
        tempX.push('pet');
        tempX.push('monster');
        tempX.push('moob');
        tempX.push(key);
        tempX.push(value.name[0]);
        tempX.push(value.name[1]);
        tempX.push(value.name[2]);
        tempX.push(value.name[3]);
        tempX.push(value.name[4]);
        tempX.push(value.name[5]);
        if (value.description) tempY.push(value.description);
        tempX = tempX.join(' ').toUpperCase();
        tempY = tempY.join(' ').toUpperCase();
        local.array_backup.push({
            name: key,
            type: 'creature',
            optional: tempX,
            optional2: tempY
        });
    });
    local.array_backup.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        else return 0;
    });
    local.array = local.array_backup.slice();
    local.page_min = 0;
    temp.arrayL = local.array.length;
    if (temp.arrayL % local.page_qty) local.page_max = Math.floor(temp.arrayL / local.page_qty);
    else local.page_max = temp.arrayL / local.page_qty - 1;
    if (local.page_max == -1) local.page_max = 0;

    createPage('result');
    $("#text-search").on('change keyup', updatePage);
    $("#main-search").submit(updatePage);
}
function updatePage(e) {
    e.preventDefault();
    var temp = {};
    var local = $master.local;
    temp.strS = $("#text-search").val().trim().toUpperCase();
    local.page = 0;
    if (temp.strS != '' && temp.strS != ' ') {
        local.array = local.array_backup.filter(function (value) {
            if (value.optional.match(temp.strS)){
                value.rank = 1;
                return true;
            } else if (value.optional2.match(temp.strS)){
                value.rank = 2;
                return true;
            } else return false;
        });
        local.array.sort(function (a, b) {
            if (a.rank == b.rank){
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                else return 0;
            } else return a.rank- b.rank;
        })

    } else {
        local.array = local.array_backup.slice();
    }

    temp.arrayL = local.array.length;
    if (temp.arrayL % local.page_qty) local.page_max = Math.floor(temp.arrayL / local.page_qty);
    else local.page_max = temp.arrayL / local.page_qty - 1;
    if (local.page_max == -1) local.page_max = 0;
    createPage('result');

}
function createPage(type, subtype) {
    var local = $master.local;
    var temp = {};

    if (type === 'result') {
        temp.array = local.array.slice(local.page * local.page_qty, local.page * local.page_qty + local.page_qty);
        temp.btn = btn_html(local.array.length, local.page);
        temp.result = '<div class="result"><table class="width-100"><tbody>';
        $.each(temp.array, function (key, value) {
            var tempX = {};
            var $obj = $master.api[value.type][value.name];
            if (value.type === 'item') {
                tempX.onClick = 'onclick="createPage(\'item\',\'' + $obj.name + '\')"';
                tempX.img = '<img class="icon-result"  ' + tempX.onClick +
                    ' src="' + baseItem + $obj.icon + '">';
                tempX.name = '<a class="rarity-' + $obj.rarity + '" ' + tempX.onClick + '>' + $obj.name + '</a>';
                tempX.opt = [];
                if ($obj.type) tempX.opt.push($obj.type);
                if ($obj.rarity) tempX.opt.push($obj.rarity);
                if ($obj.level) tempX.opt.push($obj.level);
                tempX.opt = tempX.opt.join(' - ').toUpperCase();
                if (tempX.opt != '') tempX.opt = '<span class="descr-opt">' + tempX.opt + '</span><br>';
                tempX.descr = '<p>' + tempX.opt + $obj.description + '</p>';
                tempX.base = '<tr><td><table class="width-100"><tbody>' +
                    '<tr>' +
                    '<td rowspan="2" class="td-img">' + tempX.img + '</td>' +
                    '<td class="td-title">' + tempX.name + '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="td-descr">' + tempX.descr + '</td>' +
                    '</tr>' +
                    '</tbody></table></td></tr>';
                temp.result += tempX.base;
            } else if (value.type === 'creature') {
                tempX.onClick = 'onclick="createPage(\'creature\',\'' + $obj.type + '\')"';
                tempX.img = '<img class="icon-result"  ' + tempX.onClick +
                    ' src="' + baseCreature + $obj.icon[2] + '">';
                tempX.name = '<a ' + tempX.onClick + '>' + $obj.type + '</a>';
                tempX.opt = ['Creature'];
                tempX.opt = tempX.opt.join(' - ').toUpperCase();
                if (tempX.opt != '') tempX.opt = '<span class="descr-opt">' + tempX.opt + '</span><br>';
                tempX.descr = '<p>' + tempX.opt + $obj.description + '</p>';
                tempX.base = '<tr><td><table class="width-100"><tbody>' +
                    '<tr>' +
                    '<td rowspan="2" class="td-img">' + tempX.img + '</td>' +
                    '<td class="td-title">' + tempX.name + '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="td-descr">' + tempX.descr + '</td>' +
                    '</tr>' +
                    '</tbody></table></td></tr>';
                temp.result += tempX.base;
            }
        });
        temp.result += '</tbody></table></div>';
        temp.html = temp.btn + temp.result + temp.btn;

        $("#main-body").html(temp.html);
    } else if (type === 'creature') {
        var $obj = $master.api.creature[subtype], $obj3;
        temp.name = '<div class="p-head rarity-Good">' + $obj.name[0] + '</div>';
        temp.img = '<div class="p-img"><img src="' + baseCreature +
            $obj.icon[2] + '"></div>';

        $obj3 = $master.api.item[$obj.stone0];
        temp.cata1 = '';
        if ($obj3) {
            temp.r_click = 'onclick="createPage(\'item\',\'' + $obj3.name + '\')"';
            temp.cata1 += '<div class="p-r-name"><a class="rarity-' + $obj3.rarity + '" ' + temp.r_click + '>' +
                'Superior Catalyst: ' + $obj3.name + '</a></div>';
            temp.cata1 += '<div class="p-r-img"><img src="' + baseItem +
                $obj3.icon + '" ' + temp.r_click + '></div>';
        } else {
            temp.cata1 += '<div class="p-r-name">' + $obj.produce + '</div>';
        }

        $obj3 = $master.api.item[$obj.stone1];
        temp.cata2 = '';
        if ($obj3) {
            temp.r_click = 'onclick="createPage(\'item\',\'' + $obj3.name + '\')"';
            temp.cata2 += '<div class="p-r-name"><a class="rarity-' + $obj3.rarity + '" ' + temp.r_click + '>' +
                'Epic Catalyst: ' + $obj3.name + '</a></div>';
            temp.cata2 += '<div class="p-r-img"><img src="' + baseItem +
                $obj3.icon + '" ' + temp.r_click + '></div>';
        } else {
            temp.cata2 += '<div class="p-r-name">' + $obj.produce + '</div>';
        }

        temp.name2 = '<div class="p-head rarity-Superior">' + $obj.name[3] + '</div>';
        temp.img2 = '<div class="p-img"><img src="' + baseCreature +
            $obj.icon[4] + '"></div>';

        temp.name3 = '<div class="p-head rarity-Epic">' + $obj.name[5] + '</div>';
        temp.img3 = '<div class="p-img"><img src="' + baseCreature +
            $obj.icon[5] + '"></div>';

        temp.descr = '<div class="p-descr">' + $obj.description + '</div>';

        temp.recipe = '<div class="p-r-rname"> Produce </div>';
        $obj3 = $master.api.item[$obj.produce];
        if ($obj3) {
            temp.r_click = 'onclick="createPage(\'item\',\'' + $obj3.name + '\')"';
            temp.recipe += '<div class="p-r-name"><a class="rarity-' + $obj3.rarity + '" ' + temp.r_click + '>' +
                $obj3.name + '</a></div>';
            temp.recipe += '<div class="p-r-img"><img src="' + baseItem +
                $obj3.icon + '" ' + temp.r_click + '></div>';
        } else {
            temp.recipe += '<div class="p-r-name">' + $obj.produce + '</div>';
        }

        temp.drop = '';
        if ($obj.drop) {
            temp.drop = '<div class="p-recipe">';
            temp.drop += '<div class="p-r-rname"> Drops </div>';
            $.each($obj.drop, function (key, value) {
                var tempX = {};
                var $obj2 = $master.api.item[value];
                tempX.onClick = 'onclick="createPage(\'item\',\'' + $obj2.name + '\')"';
                tempX.img = '<img class="p-i-icon"  ' + tempX.onClick +
                    ' src="' + baseItem + $obj2.icon + '">';
                tempX.name = '<a class="rarity-' + $obj2.rarity + '" ' + tempX.onClick + '>' + $obj2.name + '</a>';
                tempX.base = '<div class="p-drop"><table><tbody>' +
                    '<tr>' +
                    '<td class="td-img">' + tempX.img + '</td>' +
                    '<td class="td-title">' + tempX.name + '</td>' +
                    '</tr>' +
                    '</tbody></table></div>';
                temp.drop += tempX.base;
            });
            temp.drop += '</div>';
        }
        temp.html = '<div class="item-page">' +
            temp.name + temp.img + temp.cata1 +
            temp.name2 + temp.img2 + temp.cata2 +
            temp.name3 + temp.img3 +
            temp.descr + temp.recipe + temp.drop + '</div>';
        $("#main-body").html(temp.html);

    } else if (type === 'item') {
        var $obj = $master.api.item[subtype], $obj3;
        temp.name = '<div class="p-head rarity-' + $obj.rarity + '">' + $obj.name + '</div>';
        temp.img = '<div class="p-img"><img src="' + baseItem +
            $obj.icon + '"></div>';
        temp.descr = '<div class="p-descr">' + $obj.description + '</div>';
        temp.opt = [];
        if ($obj.type) temp.opt.push($obj.type);
        if ($obj.rarity) temp.opt.push($obj.rarity);
        if ($obj.level) temp.opt.push($obj.level);
        temp.opt = temp.opt.join(' - ').toUpperCase();
        if (temp.opt != '') temp.opt = '<div class="p-opt">' + temp.opt + '</div>';

        temp.recipe = '';
        if ($obj.recipe) {
            var $recipe = $obj.recipe;
            $obj3 = null;
            temp.recipe = '<div class="p-recipe">';
            temp.recipe += '<div class="p-r-rname"> Schematic </div>';
            if ($recipe.type == 'Pet') {
                $obj3 = $master.api.creature[$recipe.name];
                if ($obj3) {
                    temp.r_click = 'onclick="createPage(\'creature\',\'' + $obj3.type + '\')"';
                    temp.recipe += '<div class="p-r-name"><a ' + temp.r_click + '>' +
                        $recipe.name + ' (' + $recipe.type + ')</a></div>';
                    temp.recipe += '<div class="p-r-img"><img src="' + baseCreature +
                        $obj3.icon[2] + '" ' + temp.r_click + '></div>';
                } else {
                    temp.recipe += '<div class="p-r-name">' + $recipe.name + ' (' + $recipe.type + ')</div>';
                }
            } else {
                $obj3 = $master.api.item[$recipe.name];
                if ($obj3) {
                    temp.r_click = 'onclick="createPage(\'item\',\'' + $obj3.name + '\')"';
                    temp.recipe += '<div class="p-r-name"><a class="rarity-' + $obj3.rarity + '" ' + temp.r_click + '>' +
                        $recipe.name + ' (' + $recipe.type + ')</a></div>';
                    temp.recipe += '<div class="p-r-img"><img src="' + baseItem +
                        $obj3.icon + '" ' + temp.r_click + '></div>';
                } else {
                    temp.recipe += '<div class="p-r-name">' + $recipe.name + ' (' + $recipe.type + ')</div>';
                }
            }

            temp.recipe += '<div class="p-r-iname"> Ingredients: </div>';
            $.each($recipe.ingredients, function (key, value) {
                var tempX = {};
                var $obj2 = $master.api.item[value.name], $obj4;
                tempX.onClick = 'onclick="createPage(\'item\',\'' + $obj2.name + '\')"';
                tempX.img = '<img class="p-i-icon"  ' + tempX.onClick +
                    ' src="' + baseItem + $obj2.icon + '">';
                tempX.name = '<a class="rarity-' + $obj2.rarity + '" ' + tempX.onClick + '>' +
                    value.qty + 'x ' + $obj2.name + '</a>';
                tempX.descr = '<p>' + $obj2.description + '</p>';
                tempX.objD = recipeIn($obj2);
                if (tempX.objD) {
                    $obj4 = $master.api[tempX.objD.type][tempX.objD.name];
                    if (tempX.objD.subtype === 'craft' && tempX.objD.type === 'item') {
                        tempX.d_onClick = 'onclick="createPage(\'item\',\'' + $obj4.name + '\')"';
                        tempX.d_img = '<img class="p-i-minicon"  ' + tempX.d_onClick +
                            ' src="' + baseItem + $obj4.icon + '">';
                        tempX.d_name = '<a class="rarity-' + $obj4.rarity + '" ' + tempX.d_onClick + '>' +
                            $obj4.name + ' (' + $obj4.type + ')</a>';
                        tempX.descr = '<p>Crafted by ' + tempX.d_img + tempX.d_name + '</p>';
                    } else if (tempX.objD.subtype === 'craft' && tempX.objD.type === 'creature') {
                        tempX.d_onClick = 'onclick="createPage(\'creature\',\'' + $obj4.type + '\')"';
                        tempX.d_img = '<img class="p-i-minicon"  ' + tempX.d_onClick +
                            ' src="' + baseCreature + $obj4.icon[2] + '">';
                        tempX.d_name = '<a ' + tempX.d_onClick + '>' +
                            $obj4.name[0] + ' (Pet)</a>';
                        tempX.descr = '<p>Crafted by ' + tempX.d_img + tempX.d_name + '</p>';
                    } else if (tempX.objD.subtype === 'drop' && tempX.objD.type === 'item') {
                        tempX.d_onClick = 'onclick="createPage(\'item\',\'' + $obj4.name + '\')"';
                        tempX.d_img = '<img class="p-i-minicon"  ' + tempX.d_onClick +
                            ' src="' + baseItem + $obj4.icon + '">';
                        tempX.d_name = '<a class="rarity-' + $obj4.rarity + '" ' + tempX.d_onClick + '>' +
                            $obj4.name + ' (' + $obj4.type + ')</a>';
                        tempX.descr = '<p>Dropped by ' + tempX.d_img + tempX.d_name + '</p>';
                    } else if (tempX.objD.subtype === 'drop' && tempX.objD.type === 'creature') {
                        tempX.d_onClick = 'onclick="createPage(\'creature\',\'' + $obj4.type + '\')"';
                        tempX.d_img = '<img class="p-i-minicon"  ' + tempX.d_onClick +
                            ' src="' + baseCreature + $obj4.icon[2] + '">';
                        tempX.d_name = '<a ' + tempX.d_onClick + '>' +
                            $obj4.name[0] + ' (Creature)</a>';
                        tempX.descr = '<p>Dropped by ' + tempX.d_img + tempX.d_name + '</p>';
                    }
                }
                tempX.base = '<div class="p-ingredient"><table class="width-100"><tbody>' +
                    '<tr>' +
                    '<td rowspan="2" class="td-img">' + tempX.img + '</td>' +
                    '<td class="td-title">' + tempX.name + '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="td-descr">' + tempX.descr + '</td>' +
                    '</tr>' +
                    '</tbody></table></div>';
                temp.recipe += tempX.base;
            });
            temp.recipe += '</div>';
        }

        temp.droppedObj = recipeIn($obj);
        temp.dropped = '';
        if (temp.droppedObj) {
            if (temp.droppedObj.subtype == 'drop') {
                var $obj5 = $master.api[temp.droppedObj.type][temp.droppedObj.name];
                temp.dropped += '<div class="p-r-rname"> Dropped By </div>';
                if (temp.droppedObj.type == 'creature') {
                    temp.dropped_click = 'onclick="createPage(\'creature\',\'' + $obj5.type + '\')"';
                    temp.dropped += '<div class="p-r-name"><a ' + temp.dropped_click + '>' +
                        $obj5.name[0] + ' (Creature)</a></div>';
                    temp.dropped += '<div class="p-r-img"><img src="' + baseCreature +
                        $obj5.icon[2] + '" ' + temp.dropped_click + '></div>';
                } else {
                    temp.dropped_click = 'onclick="createPage(\'item\',\'' + $obj5.name + '\')"';
                    temp.dropped += '<div class="p-r-name"><a class="rarity-' + $obj5.rarity + '" ' + temp.dropped_click + '>' +
                        $obj5.name + ' (' + $obj5.type + ')</a></div>';
                    temp.dropped += '<div class="p-r-img"><img src="' + baseItem +
                        $obj5.icon + '" ' + temp.dropped_click + '></div>';
                }
            }
        }


        temp.drop = '';
        if ($obj.drop) {
            temp.drop = '<div class="p-recipe">';
            temp.drop += '<div class="p-r-rname"> Drops </div>';
            $.each($obj.drop, function (key, value) {
                var tempX = {};
                var $obj2 = $master.api.item[value];
                tempX.onClick = 'onclick="createPage(\'item\',\'' + $obj2.name + '\')"';
                tempX.img = '<img class="p-i-icon"  ' + tempX.onClick +
                    ' src="' + baseItem + $obj2.icon + '">';
                tempX.name = '<a class="rarity-' + $obj2.rarity + '" ' + tempX.onClick + '>' + $obj2.name + '</a>';
                tempX.base = '<div class="p-drop"><table><tbody>' +
                    '<tr>' +
                    '<td class="td-img">' + tempX.img + '</td>' +
                    '<td class="td-title">' + tempX.name + '</td>' +
                    '</tr>' +
                    '</tbody></table></div>';
                temp.drop += tempX.base;
            });
            temp.drop += '</div>';
        }
        temp.html = '<div class="item-page">' + temp.name + temp.img + temp.opt + temp.descr + temp.drop + temp.recipe + temp.dropped + '</div>';
        $("#main-body").html(temp.html);
    }
    window.scrollTo(0, 0);
}
function recipeIn(obj) {
    var temp = null;
    if (typeof $master.api.recipe_in[obj.name] == 'undefined') {
        if (obj.recipe) {
            if (obj.recipe.type != 'Pet') {
                temp = {type: 'item', subtype: 'craft', name: obj.recipe.name};
            } else {
                temp = {type: 'creature', subtype: 'craft', name: obj.recipe.name};
            }
            $master.api.recipe_in[obj.name] = temp;
            return temp;
        }

        $.each($master.api.item, function (key, value) {
            if (value.drop && value.drop.indexOf(obj.name) != -1) {
                temp = {type: 'item', subtype: 'drop', name: value.name};
                return false
            }
        });
        $.each($master.api.creature, function (key, value) {
            if (value.drop && value.drop.indexOf(obj.name) != -1) {
                temp = {type: 'creature', subtype: 'drop', name: key};
                return false
            }
        });
        $master.api.recipe_in[obj.name] = temp;
    }
    return $master.api.recipe_in[obj.name];
}
function btnPage(obj) {
    var local = $master.local;
    //$('html, body').animate({ scrollTop: 0 }, 'fast');

    if (obj == 1 && (local.page + 1) <= local.page_max) {
        local.page++;
        createPage('result');
    } else if ((local.page - 1) >= local.page_min) {
        local.page--;
        createPage('result');
    }
}
function btn_html(arrayLength, page) {
    var temp = {};
    var local = $master.local;

    temp.html = '<div class="btn-gap"><div class="btn-group btn-group-justified" role="group" aria-label="...">\
        <div class="btn-group" role="group">\
            <a role="button" class="btn btn-default ' + (local.page_min == page ? 'disabled' : '') + '" onclick="btnPage(0)"><i class="fa fa-chevron-left"></i></a>\
        </div>\
        <div class="btn-group" role="group">\
            <a role="button" class="btn btn-default disabled">' + (page + 1) + ' of ' + (local.page_max + 1) + '</a>\
        </div>\
        <div class="btn-group" role="group">\
            <a role="button" class="btn btn-default ' + (local.page_max == page ? 'disabled' : '') + '" onclick="btnPage(1)"><i class="fa fa-chevron-right"></i></a>\
        </div>\
        </div></div>';
    return temp.html;
}
window.arunx = function () {
    this.name = 'hello'
};

arunx.prototype = {
    add_icon: function (obj) {
        $.each(obj.api.item, function (key, value) {
            value.icon = value.name.toLowerCase().split(' ').join('_') + '.png';
        });

        $.each(obj.api.creature, function (key, value) {
            value.icon = [];
            value.icon[0] = value.name[0].toLowerCase().split(' ').join('_') + '.png';
            value.icon[1] = value.name[1].toLowerCase().split(' ').join('_') + '.png';
            value.icon[2] = value.name[2].toLowerCase().split(' ').join('_') + '.png';
            value.icon[3] = value.name[3].toLowerCase().split(' ').join('_') + '.png';
            value.icon[4] = value.name[4].toLowerCase().split(' ').join('_') + '.png';
            value.icon[5] = value.name[5].toLowerCase().split(' ').join('_') + '.png';
        });
        console.log(JSON.stringify(obj.api.item));
        console.log(JSON.stringify(obj.api.creature));
    },
    fixing: function (obj) {
        var temp = {};
        temp.master = {};
        $.each(obj, function (key, value) {
            var tempX = {};
            if (value['Name']) {
                tempX.name = value['Name'];
                tempX.icon = 'wiki/item_images/' + value['Name'].toLowerCase().replace(' ', '_') + '.png';
            }
            if (value['Type']) tempX.type = value['Type'];
            if (value['Level/Tier']) tempX.level = value['Level/Tier'];
            if (value['Quality']) tempX.rarity = value['Quality'];
            if (value['Description']) tempX.description = value['Description'];
            if (value['CraftedAt']) {
                tempX.recipe = {};
                tempX.recipe.name = value['CraftedAt'];
                tempX.recipe.output_qty = 1;
                tempX.recipe.type = 'Workstation';
                tempX.recipe.ingredients = [];
                if (value['Comp0']) {
                    tempX.recipe.ingredients[0] = {
                        name: value['Comp0'],
                        qty: value['Comp0Amt']
                    }
                }
                if (value['Comp1']) {
                    tempX.recipe.ingredients[1] = {
                        name: value['Comp1'],
                        qty: value['Comp1Amt']
                    }
                }
                if (value['Comp2']) {
                    tempX.recipe.ingredients[2] = {
                        name: value['Comp2'],
                        qty: value['Comp2Amt']
                    }
                }
                if (value['Comp3']) {
                    tempX.recipe.ingredients[3] = {
                        name: value['Comp3'],
                        qty: value['Comp3Amt']
                    }
                }
            }
            temp.master[tempX.name] = tempX;
        });
        console.log(JSON.stringify(temp.master));
    },
    fixing_pet: function (obj) {
        var temp = {};
        temp.master = {};
        $.each(obj, function (key, value) {
            var tempX = {};
            tempX.name = [];
            tempX.icon = [];
            //Type	Description	Small Normal	Medium Normal	Large Normal	Medium Powerful	Large Powerful	Large Epic
            // Produces	         Powerful Catalyst	          Epic Catalyst	  Toughness	    Poison Resist	 Electric Resist	  Fire Resist	 Ice Resist	  Symbiosis
            tempX.name[0] = value['Small Normal'];
            tempX.name[1] = value['Medium Normal'];
            tempX.name[2] = value['Large Normal'];
            tempX.name[3] = value['Medium Powerful'];
            tempX.name[4] = value['Large Powerful'];
            tempX.name[5] = value['Large Epic'];

            tempX.icon[0] = 'wiki/creature_images/' + tempX.name[0].toLowerCase().replace(' ', '_') + '.png';
            tempX.icon[1] = 'wiki/creature_images/' + tempX.name[1].toLowerCase().replace(' ', '_') + '.png';
            tempX.icon[2] = 'wiki/creature_images/' + tempX.name[2].toLowerCase().replace(' ', '_') + '.png';
            tempX.icon[3] = 'wiki/creature_images/' + tempX.name[3].toLowerCase().replace(' ', '_') + '.png';
            tempX.icon[4] = 'wiki/creature_images/' + tempX.name[4].toLowerCase().replace(' ', '_') + '.png';
            tempX.icon[5] = 'wiki/creature_images/' + tempX.name[5].toLowerCase().replace(' ', '_') + '.png';


            tempX.type = value['Type'];
            tempX.stone0 = value['Powerful Catalyst'];
            tempX.stone1 = value['Epic Catalyst'];
            tempX.description = value['Description'];
            tempX.produce = value['Produces'];
            tempX.symbiosis = value['Symbiosis'];

            tempX.toughness = parseFloat(value['Toughness']);
            tempX.poison_r = parseFloat(value['Poison Resist']);
            tempX.electric_r = parseFloat(value['Electric Resist']);
            tempX.fire_r = parseFloat(value['Fire Resist']);
            tempX.ice_r = parseFloat(value['Ice Resist']);

            temp.master[tempX.type] = tempX;
        });
        console.log(JSON.stringify(temp.master));
    }
};
arun = new arunx();