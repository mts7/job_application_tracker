<?php

namespace database\migrations;

use database\custom\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateJobTechnologiesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up(): void
	{
		Schema::create('job_technologies', function (Blueprint $table) {
			$table->uuidPrimary();
			$table->foreignCascade('job_id');
			$table->foreignCascade('technology_id');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down(): void
	{
		Schema::dropIfExists('job_technologies');
	}
}
