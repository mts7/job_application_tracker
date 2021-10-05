<?php

namespace database\migrations;

use database\custom\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('applications', function (Blueprint $table) {
			$table->uuidPrimary();
			$table->foreignCascade('resume_id');
			$table->foreignCascade('communication_id');
			$table->timestamp('due_at')->nullable();
			$table->timestamp('applied_at')->nullable();
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
		Schema::dropIfExists('applications');
	}
}
