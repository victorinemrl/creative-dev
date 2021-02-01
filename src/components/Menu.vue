<template>
  <div class="menu">
    <vs-button type="filled" color="#342D35" id="getTicketButton"> Get Ticket</vs-button>
    <div class="menuContent">
        <ul>
            <li>About</li>
            <li>Workshop</li>
            <li>Designers</li>
            <li>Schedule</li>
            <li>Venue</li>
        </ul>
        <ul>
            <li>Contacts<br>
            Coucou</li>
            <li>Legal Terms<br>
            blabla<br>
            blablbla<br></li>
            <li>Subscribe Now
            <vs-input label-placeholder="Label-placeholder"/>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped lang="scss">
.menu{
    position: absolute;
    padding: 2vw;
    width:96vw;
    height: 100vh;
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
        }
    }
}
</style>
