<section class="content-header">
    <h1> Accounts Management </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo base_url(); ?>"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Accounts Management</li>
    </ol>
</section>


<section class="content">
    <?php echo add_edit_form_part(); ?>
    <div class="box box-info">
        <?php echo box_heading('Accounts Management'); ?>
        <div class="box-body">

            <table class="table table-bordered table-striped datatable-fixed-header" id="common_datatable" data-control="Accounts" data-add-new="Accounts" data-serial-number="1"  data-sorting-type="desc"  data-sorting="2" >
                <thead>
                    <tr>
        
                        <th width="15%">Full Name</th>
                        <th width="25%">Email</th>
                        <th width="15%">Phone Number</th>
                        <th width="15%">DOB</th>
                        <th width="15%">Country</th>
                        <th class="hidden-phone">Action</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        </div>
    </div>
</section>