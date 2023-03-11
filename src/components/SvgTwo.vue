<template>
    <div class="detail-container">
        <div class="row">
            <div class="col-lg-3">
                <div class="card wid-90 border-shadow border-none">
                    <div class="d-flex justify-content-center">
                        <img src="../assets/img/image1.jpg" alt="Card image cap " class="p-2 profileimg" />
                    </div>
                    <div class="card-body">
                        <p class="card-para">Vikas Bhagaria</p>
                        <p class="card-text aqua-color text-center">Research Analyst</p>
                    </div>
                    <div class="card-body">
                        <p class="card-para">2.27%</p>
                        <p class="card-text aqua-color text-center">Annualised ROI</p>
                    </div>

                    <div class="card-body d-flex justify-content-between">
                        <div>
                            <p class="card-para">NA</p>
                            <p class="card-text aqua-color text-center">Accuracy</p>
                        </div>
                        <div>
                            <p class="card-para">NA</p>
                            <p class="card-text aqua-color">Success Rate</p>
                        </div>
                    </div>
                    <div class="card-body d-flex justify-content-between">
                        <div>
                            <p class="card-para color-red">2</p>
                            <p class="card-text aqua-color text-center">Live Reco</p>
                        </div>
                        <div>
                            <p class="card-para">146</p>
                            <p class="card-text aqua-color">Total Reco</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 border-shadow">
                <div class="card-body">
                    <p class="card-para align-left">Portfolio Overview</p>
                </div>
                <div class="dummy-tabs d-flex">
                    <div class="card-body">
                        <p class="card-para align-left">Stocks</p>
                    </div>

                    <div class="card-body">
                        <p class="card-para align-left">Stocks</p>
                    </div>
                    <div class="card-body">
                        <p class="card-para align-left">Stocks Covered 34</p>
                    </div>
                </div>
                <DoughnutChart />
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-lg-3">
                <div class="card border-shadow border-none mt-4">
                    <!-- <div class="d-flex justify-content-center">
                        <img src="../assets/img/image1.jpg" alt="Card image cap " class=" p-2 profileimg" />
                    </div> -->
                    <div class="card-body">
                        <p class="card-para align-left">About</p>
                        <p class="card-text text-color-gry">
                            I am a SEBI Registered Research Analyst with over 12 Years of
                            Experience in Financial Markets
                        </p>
                    </div>
                    <div class="card-body mb-4">
                        <p class="align-left">
                            <span class="text-color-bl f-14">Company</span>: Chart n Trade
                        </p>
                        <p class="text-left">
                            <span class="text-color-bl f-14">SEBI Registered Number</span>:
                            INH12345678
                        </p>
                    </div>

                    <div class="card-body d-flex justify-content-between mt-4">
                        <div>
                            <img src="../assets/img/linkedin.svg" width="20" alt="" style="padding-right: 5px" />
                            <img src="../assets/img/telegram.svg" width="20" alt="" style="padding-right: 5px" />
                            <img src="../assets/img/twitter.svg" width="20" alt="" style="padding-right: 5px" />
                            <img src="../assets/img/youtube.svg" width="20" alt="" style="padding-right: 5px" />
                            <img src="../assets/img/globe-solid.svg" width="20" alt="" style="padding-right: 5px" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 border-shadow mt-4 w-90">
                <div class="graphsection d-flex justify-content-around pt-3">
                    <div class="card-body">
                        <p class="card-para align-left">Expert Vs Sensex</p>
                    </div>
                    <div class="card-body text-right">
                        <div class="btn period m-2">1M</div>
                        <div class="btn period m-2">3M</div>
                        <div class="btn period m-2">6M</div>
                        <div class="btn period m-2">1Y</div>
                        <div class="btn period m-2">MAX</div>
                    </div>
                </div>
                <div class="export text-right">
                    <input type="checkbox" />
                    <label class="export-checkbox">vikas bhagrai</label>
                    <input type="checkbox" />
                    <label class="export-checkbox">Sensex</label>
                </div>
                <div class="graph-img">
                    <Line />
                    <!-- <img src="../assets/img/graph.png" style="width: 100%;height: 207px; padding: 10px 0px;" alt="" /> -->
                </div>
                <div class="card-body">
                    <p class="graph-text">
                        Value of ₹100 invested on 01st December would be ₹111 today.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="invest-calc">
                    <div class="border-shadow p-1">
                        <div class="invest-inner-content">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="invest-para">If you would have invested</div>
                                    <div class="amount">1L</div>
                                    <div class="profit-tiger">
                                        in <span style="color: #df6052">profit tiger</span> in
                                    </div>
                                    <div class="card-body text-right">
                                        <div class="btn period m-2 border-none">1M</div>
                                        <div class="btn period m-2 border-none">3M</div>
                                        <div class="btn period m-2 border-none">6M</div>
                                        <div class="btn period m-2 border-none">1Y</div>
                                        <div class="btn period m-2 border-none">MAX</div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="arrow-line">---------------></div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="invest-para">If you would have invested</div>
                                    <div class="amount">3.12 Cr</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 border-shadow ml-1">
                <div class="invest-calc">
                    <div class="border-shdow p-1">
                        <div class="header d-flex m-2">
                            <div class="recomnd">
                                <h5>Recommendations (Equity)</h5>
                            </div>

                            <div class="card-body text-right">
                                <div class="btn period m-2">1M</div>
                                <div class="btn period m-2">3M</div>
                                <div class="btn period m-2">6M</div>
                                <div class="btn period m-2">1Y</div>
                            </div>
                        </div>
                       <div class="row">
                        <div class="col-lg-6 the" v-for="data in Recommond" :key="data">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between detail-tabel p-2">
                                        <div class="live-tag d-flex">
                                            <div class="live"></div>
                                            <div class="live-word">live</div>
                                        </div>
                                        <div class="trade">trade</div>
                                    </div>
                                    <div class="d-flex justify-content-between p-2">
                                        <div class="live-tag align-left">
                                            <div class="name">{{ data.name }}</div>
                                            <span>chart & Trade</span>
                                        </div>
                                        <div>
                                            <div class="short">Short Term</div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between p-2">
                                        <div class="live-tag align-left">
                                            <div class="name">Eicher Motors Ltd.</div>
                                        </div>
                                        <div>
                                            <div class="name">18761</div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between p-2">
                                        <div class="live-tag d-flex">
                                            <div class="reco">17415.2</div>
                                            <div class="reco">17415.2</div>
                                            <div class="reco">17415.2</div>
                                        </div>
                                        <div class="buy">Buy</div>
                                    </div>
                                    <div class="dropdown text-right">
                                        <button class="btn btn-secondary dropdown-toggle bg-red" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Check Real Time
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Dummy Text</a>
                                            <a class="dropdown-item" href="#">Dummy Text</a>
                                            <a class="dropdown-item" href="#">Dummy Text</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-6 border-shadow">
                <div class="invest-calc">
                    <div class="border-shdow p-1">
                        <div class="header d-flex m-2">
                            <div class="recomnd">
                                <h5>Recommendations (Options)</h5>
                            </div>

                            <div class="card-body text-right">
                                <div class="btn period m-2">1M</div>
                                <div class="btn period m-2">3M</div>
                                <div class="btn period m-2">6M</div>
                                <div class="btn period m-2">1Y</div>
                            </div>
                        </div>
                     <div class="row">
                        <div class="col-lg-6 col-md-6" v-for="data in Recommond" :key="data">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between detail-tabel p-2">
                                        <div class="live-tag d-flex">
                                            <div class="live"></div>
                                            <div class="live-word">live</div>
                                        </div>
                                        <div class="trade">trade</div>
                                    </div>
                                    <div class="d-flex justify-content-between p-2">
                                        <div class="live-tag align-left">
                                            <div class="name">{{ data.name }}</div>
                                            <span>chart & Trade</span>
                                        </div>
                                        <div>
                                            <div class="short">Short Term</div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between p-2">
                                        <div class="live-tag align-left">
                                            <div class="name">Eicher Motors Ltd.</div>
                                        </div>
                                        <div>
                                            <div class="name">18761</div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between p-2">
                                        <div class="live-tag d-flex">
                                            <div class="reco">17415.2</div>
                                            <div class="reco">17415.2</div>
                                            <div class="reco">17415.2</div>
                                        </div>
                                        <div class="buy">Buy</div>
                                    </div>
                                    <div class="dropdown text-right">
                                        <button class="btn btn-secondary dropdown-toggle bg-red" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Check Real Time
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Dummy Text</a>
                                            <a class="dropdown-item" href="#">Dummy Text</a>
                                            <a class="dropdown-item" href="#">Dummy Text</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Donut from 'vue-css-donut-chart';
// import 'vue-css-donut-chart/dist/vcdonut.css';
// Vue.use(Donut);
import DoughnutChart from "@/components/chartPro.vue"
import Line from "@/components/Line.vue"


export default {
    components: {
        DoughnutChart,
        Line,

    },
    data() {
        return {
            Recommond: [
                {
                    name: "atul kumar",
                },
                {
                    name: "atul kumar",
                }, 
                {
                    name: "atul kumar",
                }, 
                {
                    name: "atul kumar",
                }, 
                {
                    name: "atul kumar",
                }, 
                {
                    name: "atul kumar",
                },
            ],
        };
    },

    // mounted() {
    //     axios
    //         .post("https://prod-api.stockants.com/api/my_dashboard/v1/stock/market_cap_based_roi",
    //             {
    //                 "user_id": 616,
    //                 "period": "1Y",
    //             },
    //             // Authorization: {
    //             //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOTIsImlzcyI6InN0b2NrYW50cy5jb20iLCJleHAiOjE2NzgyOTE5NTd9.hJIWCm43iKnVWDZSX3Sq5qGS26a7gqF-ubDJoeAONAg"
    //             //     },

    //         ).then(response => (this.info = response))
    // // },

    // methods: {
    //     handleSectionClick(section, event) {
    //         console.log(`${section.label} clicked.`);
    //     }
    // }

};
// const res = axios.get("https://prod-api.stockants.com/api/auth/v1/sign_in", {
//     Authorization: {
//         'Username': '09822222222',
//         'Password': 'sana1234'
//     },
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });
</script>
