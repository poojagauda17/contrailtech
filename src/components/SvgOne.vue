<template>
    <div class="dashboard-content">
    <div class="row">
        <div class="col-lg-3 p-3" v-for="data in cards" :key="data">
            <div class="card border-none box-shadow" style="width: 18rem;">
                <img :src="require(`@/assets/img/${data.img}`)" alt="Card image cap" class="card-img-top p-2" />
                <div class="card-body d-flex justify-content-between">
                    <div>
                        <h5 class="card-title text-color-bl">{{ data.name }}</h5>
                        <p class="card-text text-color-gry">{{ data.profession }}</p>
                    </div>
                    <div>
                        <router-link to="/userdetails">
                            <button class="btn btn-primary angleCircle">
                                <img src="../assets/img/angle-right-solid.svg" width="10" alt="" />
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cards: [
                {
                    img: "image1.jpg",
                    name: "Vikas Bhagaria",
                    profession: "Research Analyst",
                },
                {
                    img: "image2.jpg",
                    name: "Jai Goel",
                    profession: " Analyst",
                },
                {
                    img: "image3.jpg",
                    name: "Neelam Shah",
                    profession: "Financial Advisor",
                },
                {
                    img: "image4.jpg",
                    name: "Manish Sai",
                    profession: "Research Analyst",
                },
                {
                    img: "image5.jpg",
                    name: "Sara Patel",
                    profession: " Analyst",
                },
                {
                    img: "image6.jpg",
                    name: "Raj Madan",
                    profession: "Financial Analyst",
                },
                {
                    img: "image7.jpg",
                    name: "Arun Kumar",
                    profession: "Research Analyst",
                },
                {
                    img: "image2.jpg",
                    name: "Manish Sai",
                    profession: "Research Analyst",
                },
            ],
        };
    },
};
</script>