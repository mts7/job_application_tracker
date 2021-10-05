<?php

use database\custom\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateResumesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up(): void
	{
		Schema::create('resumes', function (Blueprint $table) {
			$table->uuidPrimary();
			$table->string('title');
			$table->positiveInteger('version');
			$table->string('location')->comment('The state or locality of the resume');
			$table->string('phone', 24);
			$table->string('email', 320);
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
		Schema::dropIfExists('resumes');
	}
}
