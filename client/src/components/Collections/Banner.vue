<template>
  <div>
    <div v-if="$route.path === '/collections/mens'" class="collection-banner">
      <div class="collection-banner-image">
        <div class="image"></div>
      </div>
      <div class="collection-banner-details">
        <div class="wrapper">
          <div class="banner-titles">
            <h1 class="title-typography">Men's Shirt</h1>
          </div>
          <p class="description-typography">Be unique everyday</p>
        </div>
      </div>
    </div>

    <div v-if="$route.path === '/collections/womens'" class="collection-banner">
      <div class="collection-banner-image">
        <div class="women-image"></div>
      </div>
      <div class="collection-banner-details">
        <div class="wrapper">
          <div class="banner-titles">
            <h1 class="title-typography">Women's Shirt</h1>
          </div>
          <p class="description-typography">Be unique everyday</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .collection-banner {
    display: flex;
    flex-direction: row;
    background-color: rgb(33, 42, 47);
    height: 500px;
    width: 100%;
  }

  .collection-banner-image {
    width: 65%;
  }

  .image {
    background-image: url(https://source.unsplash.com/qnKhZJPKFD8);
    height: 100%;
  }

  .women-image {
    height: 100%;
    background-image: url(https://source.unsplash.com/1lmPFQ7ZXeM);
  }

  .collection-banner-details {
    width: 35%;
    text-align: center;
    flex: 1 1 0%;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    padding: 24px 48px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
  }

  .banner-titles {
    margin-bottom: 12px;
  }

  .title-typography {
    color: white;
    font-size: 48px;
    line-height: 1.3;
    font-weight: 900;
    letter-spacing: 0.5px;
  }

  .description-typography {
    color: white;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 1.5;
    font-weight: 500;
  }
</style>
