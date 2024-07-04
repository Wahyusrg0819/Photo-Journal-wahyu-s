<template>
    <q-breadcrumbs gutter="xs">
      <q-breadcrumbs-el 
        v-for="menu in menus"
        :key="menu.label"
        :to="menu.to"
        :label="menu.label"
        :class="{ 'active': selectedMenu === menu.label }"
        @click.native="setActiveMenu(menu.label)" 
      />
    </q-breadcrumbs>
<div class="body-about">
    <div class="row justify-evenly">

        <section class="child1">
            <p>Hello! My name is Wahyu Muliadi Siregar. I am currently a 5th-semester student in the Informatics Engineering program at Universitas Islam Riau. Born in Hutaholbung, Tapanuli Selatan, North Sumatra, I have always had a passion for technology and innovation.</p>

            <h3>Education and Background</h3>
            <p>I am pursuing my degree in Informatics Engineering, where I have developed a strong foundation in various programming languages and technologies. My proficiency includes HTML, CSS, and JavaScript. I have also worked on several projects, such as:</p>
            <ul>
                <li><strong>CRUD Application using PHP</strong></li>
                <li><strong>Vue + Vite Todo List</strong> with a feature to search posts by users using API</li>
                <li><strong>Weather App</strong> using API</li>
            </ul>

            <h3>Organizational Involvement</h3>
            <p>I am an active member of HIMATIF (Himpunan Mahasiswa Teknik Informatika), where I serve in the Spiritual Division. As part of my role, I have organized and participated in various activities, including community events like "Buka Bersama" (Iftar gathering) and more.</p>


            <h3>Aspirations and Goals</h3>
            <p>I am driven by a passion for continuous learning and innovation in the field of technology. My goal is to leverage my skills and knowledge to create impactful projects and contribute to the tech community.</p>

        </section>


        <section class="child2">

            <img class="fotome" src="/images/foto1.jpg" alt="me">
 
        </section>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            menus: [
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' }
            ],
            selectedMenu: 'Home'
        }
    },
    methods: {
        setActiveMenu(menuLabel) {
            this.selectedMenu = menuLabel;
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.body-about {
    margin: 2%;
}
.child1 {
    overflow: auto;
    min-width: 500px; 
    max-width: 500px;
}

.child2 { 
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 500px; 
    max-width: 500px;   
}

.fotome {
    max-width: 480px;
    height: auto;
    padding: 3em;
    margin: 3em;
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
}

.fotome:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0.6, 0.6);

}

.q-breadcrumbs {
    margin-left: 14%;
    margin-right: 5%;
    cursor: pointer;
    font-family: roboto;
}

h3 {
    font-size: 20px;
    font-weight: 500;
    font-family: roboto;
}

@media (max-width: 480px) { 
    h3 {
        font-size: 18px;
    }

    .child1,
    .child2 {
        min-width: 300px;
        max-width: 300px;
    }

    .fotome {
        max-width: 300px;
    }
    

    p {
        font-size: 16px;
    }

    ul {
        font-size: 14px;
    }
    
    li {
        margin-bottom: 5px;
    }
}

</style>