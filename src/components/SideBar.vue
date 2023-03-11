<template>
    <div class="SidebarSection">
        <div class="sidebar-content">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Stock Ants</a>
                </li>
                <div class="dropdown w-4">
                    <button class="stock-ant-ov dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        StockAnts Overview
                    </button>
                    <div class="dropdown-menu drop-content" aria-labelledby="dropdownMenuButton">
                        <li class="dropdown-item nav-item">
                            <a class="nav-link" href="#">Accounts</a>
                        </li>
                        <li class="dropdown-item nav-item">
                            <a to="" class="nav-link">Demand</a>
                        </li>
                        <li class="dropdown-item nav-item">
                        <a class="dropdown-item nav-link" href="#">Supply</a>
                        </li>
                    </div>
                </div>
                <li class="nav-item">
                    <router-link to="" class="nav-link"> Edit </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="" class="nav-link">Hide</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>