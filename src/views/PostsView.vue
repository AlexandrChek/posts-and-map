<template>
  <div class="d-inline-flex justify-content-center w-100 my-3">
    <div class="mx-2 search-post">Search post</div>
    <MyInput @enterValue="filterPosts"/>
  </div>
  <div v-for="(post, index) in posts" :key="post" class="px-3 py-2 posts">
    <p class="post-title">{{ post.title }}</p>
    <p>{{ post.body }}</p>
    <div class="d-inline-flex">
      <p class="m-0">Comments: <span>{{ post.comments }}</span></p>
      <MyButton v-if="index !== chartIndex" @click="openChart(post, index)">Stat chart</MyButton>
      <MyButton v-if="index === chartIndex" @click="closeChart()">Hide chart</MyButton>
    </div>
    <StatChart v-if="index === chartIndex" :data="forChart"></StatChart>
  </div>
  <UpBtn v-if="upBtn" @click="goTop"/>
  <div v-if="isPagination" class="text-center p-5">
    <div class="d-inline-flex justify-content-center">
      <SimplArrowBtn v-if="currentPage > 1" @click="scrollLeft">&ensp; &#171; &ensp;</SimplArrowBtn>
      <PageNumbers v-for="n in pages" :key="n" @click="changePage(n)">
        <div>
          <div v-if="n === currentPage" id="page-pointer">&#9650;</div>
          <div v-else id="void">A</div>
        </div>
        <div :class="{'current-number': n === currentPage}">{{n}}</div>
      </PageNumbers>
      <SimplArrowBtn v-if="currentPage < numberOfPages" @click="scrollRight">&ensp; &#187; &ensp;</SimplArrowBtn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyInput from '../components/MyInput.vue'
import MyButton from '../components/MyButton.vue'
import StatChart from '../components/StatChart.vue'
import SimplArrowBtn from '../components/SimplArrowBtn.vue'
import PageNumbers from '../components/PageNumbers.vue'
import UpBtn from '../components/UpBtn.vue'

export default {
  name: 'PostsView',
  components: {
    MyInput,
    MyButton,
    SimplArrowBtn,
    PageNumbers,
    StatChart,
    UpBtn
  },
  data () {
    return {
      posts: [],
      comments: [],
      allPosts: [],
      isPagination: false,
      firstPost: 0,
      lastPost: 10,
      numberOfPages: 2,
      allPages: [],
      pages: [],
      firstPage: 0,
      lastPage: 5,
      currentPage: 1,
      forChart: [],
      chartIndex: null,
      upBtn: false
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      response.json().then(json => {
        this.allPosts = json
      })
    })

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.comments = json
      for (let i = 0; i < this.allPosts.length; i++) {
        let n = 0
        for (let j = 0; j < this.comments.length; j++) {
          if (this.allPosts[i].id === this.comments[j].postId) {n++}
        }
        this.allPosts[i].comments = n
        n = 0
      }
      this.pagination()
    })

    window.onscroll = () => {
      if (document.documentElement.scrollTop > 20) {
        this.upBtn = true
      } else {
        this.upBtn = false
      }
    }
  },
  methods: {
    pagination() {
      if (this.allPosts.length <= 10) {
        this.posts = this.allPosts
      } else {
        this.isPagination = true
        this.selectPosts()
        this.numberOfPages = Math.ceil(this.allPosts.length / 10)
        let i = 1
        while (i <= this.numberOfPages) {
          this.allPages.push(i)
          i++
        }
        if (this.numberOfPages <= 5) {
          this.pages = this.allPages
        } else {
          this.selectPages()
        }
      }
    },
    selectPosts() {
      let firstPost = this.firstPost
      let lastPost = this.lastPost
      if (this.allPosts.length - firstPost > 10) {
        this.posts = this.allPosts.slice(firstPost, lastPost)
      } else {
        this.posts = this.allPosts.slice(firstPost)
      }
    },
    selectPages() {
      let firstPage = this.firstPage
      let lastPage = this.lastPage
      if (this.allPages.length - firstPage > 5) {
        this.pages = this.allPages.slice(firstPage, lastPage)
      } else {
        this.pages = this.allPages.slice(firstPage)
      }
    },
    changePage(n) {
      this.currentPage = n
      this.firstPost = (n - 1) * 10
      this.lastPost = this.firstPost + 10
      this.selectPosts()
    },
    scrollLeft() {
      this.currentPage--
      this.lastPost = this.firstPost - 1
      this.firstPost -= 10
      this.selectPosts()
      if (this.currentPage <= this.firstPage) {
        this.firstPage--
        this.lastPage--
        this.selectPages()
      }
    },
    scrollRight() {
      this.currentPage++
      this.firstPost += 10
      if (this.allPosts.length - this.firstPost >= 10) {
        this.lastPost += 10
      } else {
        this.lastPost += (this.allPosts.length - this.firstPost - 1) 
      }
      this.selectPosts()
      if (this.currentPage > this.lastPage) {
        this.firstPage++
        this.lastPage++
        this.selectPages()
      }
    },
    filterPosts(val) {
      this.posts = this.allPosts.filter(p => {
        let currentTitle = p.title.toLowerCase()
        return currentTitle.includes(val.toLowerCase())
      })
      this.isPagination = false
      if (!val) {
        this.pagination()
      }
    },
    openChart(post, index) {
      this.forChart = []
      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].postId === post.id) {
          this.forChart.push(this.comments[i].body.length)
        }
      }
      this.chartIndex = index
    },
    closeChart() {
      this.chartIndex = null
      this.forChart = []
    },
    goTop() {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style scoped>
  .search-post {
    font-weight: 1000;
    color: rgb(209, 104, 17);
  }
  .posts {
    margin: 10px 35px;
    border: 1px solid rgb(192, 190, 190);
  }
  .post-title {
    font-weight: 1000;
    color: rgb(209, 104, 17);
  }
  span {
    font-weight: bold;
    color: red;
  }
  #page-pointer {
    color: rgb(209, 104, 17);
  }
  #void {
    color: rgb(187, 255, 218);
  }
  .current-number {
    color: rgb(209, 104, 17);
    font-weight: 1000;
  }
  @media (max-width: 575px) {
    .posts {
      margin: 10px 15px;
      font-size: 15px;
    }
    .search-post {
      font-size: 15px;
    }
  }
</style>
