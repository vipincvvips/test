<!-- Content Header (Page header) -->







   <div class="row">
            <!-- Left col -->
            <div class="col-md-10" style="margin-left: 10%;">


      <div class="box">
                <div class="box-header">
                  <h3 class="box-title">User Details</h3>
                </div><!-- /.box-header -->
                <div class="box-body no-padding">
                  <table class="table table-striped">
                    <tr>
                      <th>Title<th>
                      <th>Author</th>
                      <th>Points</th>
                      <th>Story_text</th>
                    </tr>

<?php foreach ($api_data as $key => $value) { ?>


                    <tr>
                      <td><?php echo $value->title; ?></td>
                      <td><?php echo $value->author;?></td>
                      <td><?php echo $value->points;?></td>
                      <td><?php echo $value->story_text;?></td>
                    </tr>
            <?php } ?>   

                    

                  </table>
                </div><!-- /.box-body -->
              </div><!-- /.box -->
       


       




            </div><!-- /.col -->




          </div><!-- /.row     <div class="clearfix"></div>-->



             

