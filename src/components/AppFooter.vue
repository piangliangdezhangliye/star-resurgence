<template>
  <div class="footer" id="footer">
    <div class="wrap">
      <div>
        <div class="dd" style="text-align: center">
          <div class="suds-mod">
            <div class="icon">
              <img
                src="https://img.dpm.org.cn/Uploads/Picture/2021/11/05/s6184ec2896151.png"
              />
            </div>
            <span>微博</span>
          </div>
          <div class="suds-mod">
            <div class="icon">
              <img
                src="https://img.dpm.org.cn/Uploads/Picture/2021/11/05/s6184ec3555cb0.png"
              />
            </div>
            <span>微信</span>
          </div>
          <div class="suds-mod">
            <div class="icon">
              <img
                src="https://img.dpm.org.cn/Uploads/Picture/2021/11/05/s6184ec413a76b.png"
              />
            </div>
            <span>小程序</span>
          </div>
          <div class="suds-mod">
            <div class="icon">
              <img
                src="https://img.dpm.org.cn/Uploads/Picture/2021/11/05/s6184ec4c97952.png"
              />
            </div>
            <span>学习强国号</span>
          </div>
          <div class="suds-mod">
            <div class="icon">
              <img
                src="https://img.dpm.org.cn/Uploads/Picture/2021/11/05/s6184ec5b4abae.png"
              />
            </div>
            <span>视频号</span>
          </div>
        </div>
      </div>
      <div>
        <div class="nav_foot">
          &nbsp;&nbsp;
          <a href="/sitemap.html"> 网站地图</a>&nbsp;&nbsp;
          <a href="/bottom/friend"> 相关链接</a>&nbsp;&nbsp;
          <a href="/bottom/apply_image" target="_blank"> 影像授权</a
          >&nbsp;&nbsp;
          <a href="/bottom/privacy/252" target="_blank"> 隐私政策</a
          >&nbsp;&nbsp;
          <a href="/bottom/privacy/236341.html" target="_blank"> 版权声明</a
          >&nbsp;&nbsp; <a href="/bottom/ask"> 留言板</a>&nbsp;&nbsp;
          <a href="https://www.dpm.org.cn/singles_detail/252829.html">
            联系我们</a
          >&nbsp;&nbsp;
          <a href="/bottom/aboutus.html" target="_blank"> 关于我们</a
          >&nbsp;&nbsp;
        </div>
      </div>
      <div>
        <div style="width: 100%; text-align: center">
          © 2022- 现在 星回国潮 &nbsp;
          <a href="http://www.fractal-technology.com/" target="_blank"
            >网站建设</a
          >：
          <a href="http://www.fractal-technology.com/" target="_blank"
            >星回国潮</a
          >
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped lang="less">
.footer {
  a {
    text-decoration: none !important;
    color: inherit;
  }
  min-width: 768px;
  position: relative;
  z-index: 2;
  background: #272727;
  padding: 30px 0 27px;
  color: #b4b3b8;
  min-height: 280px;
  box-sizing: border-box;
  .wrap {
    position: relative;
    max-width: 1600px;
    width: auto;
    box-sizing: border-box;
    margin: auto;
  }
  .inner {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    i {
      display: inline-block;
      width: 20px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: #404040;
      margin: 0 3px;
    }
  }
  .suds-mod {
    position: relative;
    display: inline-block;
    font-size: 16px;
    margin-bottom: 25px;
    margin-top: 0;
    width: 100px;
    .icon {
      width: 48px;
      height: 48px;
      background-color: #474747;
      border-radius: 50%;
      margin: 0 auto;
      margin-bottom: 8px;
      -webkit-transition: all 0.32s;
      img {
        width: 100%;
        border: 0;
        outline: 0;
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .nav_foot {
    margin-top: 20px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    a {
      display: inline-block;
    }
  }
}
</style>
