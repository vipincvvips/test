<aside class="main-sidebar">

    <section class="sidebar">



        <div class="user-panel">

            <div class="pull-left image">

                <img src="<?php echo ROOT_URL; ?>common-assets/images/img.jpg" class="img-circle" alt="User Image">

            </div>

            <div class="pull-left info">

    

                <a href="<?php echo base_url(); ?>"><i class="fa fa-circle text-success"></i> Admin  </a>

            </div>

        </div>



        <form action="#" method="get" class="sidebar-form">

            <div class="input-group">

                <input type="text" name="q" class="form-control" placeholder="Search...">

                <span class="input-group-btn">

                    <button type="button" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>

                </span>

            </div>

        </form>





           <ul class="sidebar-menu" data-widget="tree">

            <li class="header">MAIN NAVIGATION</li>
            <?php
            $menu_array = array(

                array('name' => 'Dashboard',

                    'icon' => 'home',

                    'direct_link' => 'index',

                    'submenus' => array(

                        'View Dashboard' => '',

                    )),

                    

                array('name' => 'Manage User',

                    'icon' => 'users',

                    'submenus' => array(

                        'Accounts' => 'accounts',

                    )),



            );

            ?>







            <?php

            foreach ($menu_array as $menuarray):



                if (isset($menuarray['direct_link'])):

                    echo '<li>';

                    echo '<a href="' . base_url($menuarray['direct_link']) . '">';

                    echo '<i class="fa fa-' . $menuarray['icon'] . '"></i> <span>' . $menuarray['name'] . '</span>';

                    echo '</a>';

                else:

                    echo '<li class="treeview">';

                    echo '<a href="#">';

                    echo '<i class="fa fa-' . $menuarray['icon'] . '"></i> <span>' . $menuarray['name'] . '</span>';

                    echo '<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>';

                    echo '</a>';

                    echo '<ul class="treeview-menu">';

                    foreach ($menuarray['submenus'] as $key => $menu):

                        echo '<li><a href="' . base_url($menu) . '"><i class="fa fa-circle-o"></i>  ' . $key . '</a></li>';

                    endforeach;

                    echo '</ul>';

                endif;





                echo '</li>';



            endforeach;

            ?>






         

        </ul>

    </section>

</aside>



