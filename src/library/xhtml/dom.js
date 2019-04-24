import sizzle from '../../core/sizzle';
import image2D from '../core';

/**
 * 把当前维护的结点加到目标结点内部的结尾
 * @param {selector} target
 * @return {image2D}
 */
export let appendTo = function (target, context) {
    let nodes = sizzle(target, context || document);
    if (nodes.length > 0) {
        for (let i = 0; i < this.length; i++)
            nodes[0].appendChild(this[i]);
    } else {
        throw new Error('Target empty!');
    }
    return this;
};

/**
 * 把当前维护的结点加到目标结点内部的开头
 * @param {selector} target
 * @return {image2D}
 */
export let prependTo = function (target, context) {
    let nodes = sizzle(target, context || document);
    if (nodes.length > 0) {
        for (let i = 0; i < this.length; i++)
            nodes[0].insertBefore(this[i], nodes[0].childNodes[0]);
    } else {
        throw new Error('Target empty!');
    }
    return this;
};

// 删除当前维护的结点
export let remove = function () {
    for (let i = 0; i < this.length; i++)
        this[i].parentNode.removeChild(this[i]);
    return this;
};

// 筛选当前结点
export let filter = function (filterback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (filterback(i, image2D(this[i]))) temp.push(this[i]);
    }
    return image2D(temp);
};
