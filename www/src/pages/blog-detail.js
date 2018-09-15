import React from 'react';
import Link from 'umi/link';
import styles from './blog-detail.less'

class BlogDetail extends React.Component {

  render() {

    const data = {
      id: 'at1',
      date: '2018-09-16',
      title: '商城网站建设 配色类别值的注意',
      content: `色彩，为我们的日常生活添加了很多的乐趣和生活情调。每天早上的日出，由灰中带红，红中有亮的色调组成，看到日出，我们的心情也会很好的。可以说，色彩在我们的日常生活中发挥着重要的作用。对于网站建设来说，色彩的重要性更是厉害。而在商城网站建设中，色彩可以分为一种色彩，两种色彩或者是一整个色系的应用，下面，我们就来具体的学习一下。<br/>

      　　一、一个色彩的应用<br/>

      　　使用一个色彩的话，网页上就会呈现出一个色彩的类型，网站建设的开发者和维护者通过调整色彩的色调和色温，以及通过整合色彩的饱和度，产生单一色彩的效果，简单的说，就是过调整色彩的明暗程度来让网站有层次感。<br/>

      　　二、两种色彩的应用<br/>

      　　这一个方面的知识就有点复杂了，具体的设计过程是这样的，网站建设者和维护者在建设网站的时候，会先选定一款颜色，这款颜色是大众非常喜爱的，也是很多人梦寐以求的。选定完这个色彩之后，通过逐渐的对比，找到选定的这款颜色的对比色，然后进行细致且微小的调整。经过完以上的步骤之后，我们知道，整个的色彩就会显得特别的丰富，但是不会让使用者感到很乱很脏的感觉。<br/>

      　　三、一个色系的应用<br/>

      　　简单的来说，网站中的一个色系呈现给你的就是五彩斑斓的感觉。比如我们经常看到的淡蓝色，藏青色，淡绿色或者是灰褐色，土黄色等等。在同一个色彩系列里，网站建设着和开发者将不同颜色整合起来，来增加网页色彩的鲜亮程度，但是不会显得花哨，非常适合年轻人的使用口味。<br/>

      　　通过以上的讲解，你肯定知道商城网站建设中色彩的基本应用。理论知识知道了，在接下来的过程中就希望你们好好地将这些知识应用到网站建设的实践中去。
       `
    }

    return (
    <div className="main-content" style={{position:'relative'}}>
      <div style={{height:'100px'}}></div>
      <h3 className={styles.acticleTitle}>{data.title}</h3>
      <span>{data.date}</span>
      <div className={styles.acticleContent}>{data.content}</div>
      <div className="bottom-footer">
        <p>上一篇：<Link className="link-to" to="/">移动互联网时代 建设移动网站策划该怎么做？ </Link></p>
        <p>下一篇：<Link className="link-to" to="/">没有了 </Link></p>
      </div>
    </div>
    )
  }

}

export default BlogDetail
