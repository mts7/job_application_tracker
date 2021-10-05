<?php

use database\custom\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('jobs', function (Blueprint $table) {
			$table->uuidPrimary();
			$table->string('title');
			$table->foreignCascade('company_id');
			$table->string('description_link')->comment('URL of the job description');
			$table->decimal('salary_low')->nullable();
			$table->decimal('salary_high')->nullable();
			$table->positiveInteger('pto_days');
			$table->boolean('remote')->default(true);
			$table->timestamp('listed_at')->nullable();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('jobs');
	}
}
