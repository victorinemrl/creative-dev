<template>
  <div class="menu">
    <vs-button type="filled" color="#342D35" id="getTicketButton"> Get Ticket</vs-button>
    <div class="menuContent">
        <ul id="menuItem">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Workshop</a></li>
            <li><a href="">Designers</a></li>
            <li><a href="">Schedule</a></li>
        </ul>
        <div id="footer">
            <div>
                <div class="footerSubtitle">Contacts</div>
                84, boulevard Bourdon 75000 Paris<br>
                insideout@contact.com <br>
                04 16 06 85 95
            </div>
            <div>
                <div class="footerSubtitle">Legal Terms</div>
                <a href="">Privacy policy</a><br>
                <a href="">Terms of use</a><br>
            </div>
            <div>
                <div class="footerSubtitle">Subscribe Now</div>
                <Newsletter ref="newsletter"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Newsletter from '@/components/Newsletter.vue'

export default {
  name: 'Menu',
  components: {
    Newsletter
  }
}
</script>

<style scoped lang="scss">
.menu{
    position: absolute;
    padding: 2vw;
    width:96vw;
    height: 100vh;
    z-index: 9;
    background-color:#FCE1DD;

    #getTicketButton{
        border-radius: 0;
        width: 10%;
        left:80%;
        margin-top: 5%;
    }
    .menuContent{
        display: flex;
        flex-direction: row;
        ul{
            list-style-type: none;
            margin-top:15vh;
        }
        #menuItem{
            width: 45vw;
            font-size: xx-large;
            padding-left: 4vw;
            font-weight: bold;
            li{
                margin: 3vh 0;
                letter-spacing: 3px;
                a{
                    color:#342D35;
                    background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, transparent 5px) no-repeat;
                    background-size: 0 100%;
                    transition: background-size .5s;
                }
                a:hover{
                    background-size: 100% 100%;
                }
            }
        }
        #footer{
            margin-top: 18vh;
            div{
                margin-bottom: 4vh;
            }
            .footerSubtitle{
                font-size: large;
                font-weight: bold;
                margin-bottom: 1vh;
            }
            a{
                color:black;
            }
        }
    }
}
</style>
